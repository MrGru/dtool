// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::fmt::format;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
use mac_address::{self, MacAddress};

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn get_mac_address() -> String {
    let mac = mac_address::get_mac_address();
    match mac {
        Ok(Some(mac_data)) => return format!("{}", mac_data),
        _ => return "".into(),
    }
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![get_mac_address])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
