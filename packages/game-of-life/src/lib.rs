// mod utils;
use std::mem;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell {
    Dead = 0,
    Alive = 1,
}

pub struct Universe {
    width: u32,
    height: u32,
    cells: Vec<Cell>,
}

impl Universe {
    pub fn get_cell(&self, index: usize) -> Cell {
        self.cells[index]
    }

    pub fn length(&self) -> usize {
        self.cells.len()
    }

    pub fn set_cell(&mut self, index: usize, state: Cell) {
        self.cells[index] = state;
    }

    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    fn alive_neighbours(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbour_row = (row + delta_row) % self.height;
                let neighbour_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbour_row, neighbour_col);
                count += self.cells[idx] as u8
            }
        }
        count
    }

    pub fn tick(&self) -> Universe {
        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbours = self.alive_neighbours(row, col);

                let next_cell = match (cell, live_neighbours) {
                    (Cell::Alive, x) if x < 2 => Cell::Dead,
                    (Cell::Alive, 2) | (Cell::Alive, 3) => Cell::Alive,
                    (Cell::Alive, x) if x > 3 => Cell::Dead,
                    (Cell::Dead, 3) => Cell::Alive,
                    (otherwise, _) => otherwise,
                };

                next[idx] = next_cell
            }
        }
        Universe {
            width: self.width,
            height: self.height,
            cells: next,
        }
    }

    pub fn new(width: u32, height: u32) -> Universe {
        let cells = (0..width * height).map(|_| Cell::Dead).collect();

        Universe {
            width,
            height,
            cells,
        }
    }

    pub fn set_size(&mut self, width: u32, height: u32) {
        self.width = width;
        self.height = height;
    }

    pub fn randomize_cells(&mut self) {
        for row in 0..self.height {
            for col in 0..self.width {
                let new_val = match js_sys::Math::random() {
                    x if x > 0.5 => Cell::Alive,
                    _ => Cell::Dead,
                };
                let idx = self.get_index(row, col);
                self.cells[idx] = new_val;
            }
        }
    }
}

#[wasm_bindgen]
pub struct DxUniverse {
    cur: Universe,
    next: Universe,
    dx: Vec<u8>,
    frames_per_tick: u8,
    cur_frames: u8,
}

// #[wasm_bindgen]
// extern "C" {
//     #[wasm_bindgen(js_namespace = console)]
//     fn log(s: &str);
// }

#[wasm_bindgen]
impl DxUniverse {
    pub fn new(width: u32, height: u32) -> DxUniverse {
        let mut cur = Universe::new(width, height);
        cur.randomize_cells();
        let next = cur.tick();
        let frames_per_tick = 60;
        let cur_frames = 0;
        let dx = (0..width * height)
            .map(
                |i| match (cur.get_cell(i as usize), next.get_cell(i as usize)) {
                    (Cell::Alive, Cell::Alive) => frames_per_tick - 1,
                    (_, Cell::Alive) => cur_frames % frames_per_tick,
                    (Cell::Dead, Cell::Dead) => 0,
                    (_, Cell::Dead) => frames_per_tick - 1 - (cur_frames % frames_per_tick),
                },
            )
            .collect();

        DxUniverse {
            cur,
            next,
            dx,
            frames_per_tick,
            cur_frames,
        }
    }

    pub fn tick(&mut self) {
        if self.cur_frames == self.frames_per_tick {
            mem::swap(&mut self.next, &mut self.cur);
            self.next = self.cur.tick();
            self.cur_frames = 0
        }
        for i in 0..self.cur.length() {
            self.dx[i as usize] = match (
                self.cur.get_cell(i as usize),
                self.next.get_cell(i as usize),
            ) {
                (Cell::Alive, Cell::Alive) => self.frames_per_tick - 1,
                (_, Cell::Alive) => self.cur_frames % self.frames_per_tick,
                (Cell::Dead, Cell::Dead) => 0,
                (_, Cell::Dead) => {
                    (self.frames_per_tick - 1) - (self.cur_frames % self.frames_per_tick)
                }
            }
        }
        self.cur_frames += 1
    }

    pub fn cells(&self) -> *const u8 {
        self.dx.as_ptr()
    }

    pub fn set_cell(&mut self, row: u32, col: u32, state: Cell) {
        let idx = self.next.get_index(row, col);
        if idx < self.next.length() {
            self.next.set_cell(idx, state);
        }
    }

    pub fn set_size(&mut self, width: u32, height: u32) {
        self.cur.set_size(width, height);
        self.next.set_size(width, height);
    }
}
