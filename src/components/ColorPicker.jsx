import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
const ColorPicker = () => {
    const snap = useSnapshot(state);
    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker
                color={snap.color}
                disableAlpha
                ppresetColors={[
                    "#FF5733", // Awesome Orange
                    "#3498DB", // Awesome Blue
                    "#2ECC71", // Awesome Green
                    "#9B59B6", // Awesome Purple
                    "#E74C3C", // Awesome Red
                    "#1ABC9C", // Awesome Turquoise
                    "#F39C12", // Awesome Yellow
                    "#34495E", // Awesome Dark Blue
                    "#27AE60", // Awesome Emerald Green
                    "#C0392B", // Awesome Dark Red
                    "#3498DB", // Awesome Blue (Duplicate for variety)
                    "#F39C12", // Awesome Yellow (Duplicate for variety)
                    "#16A085", // Awesome Dark Cyan
                    "#E67E22", // Awesome Pumpkin
                    "#8E44AD", // Awesome Dark Magenta
                    "#2980B9", // Awesome Sky Blue
                    "#D35400", // Awesome Rust
                    "#2C3E50", // Awesome Midnight Blue
                    "#1F618D", // Awesome Cobalt
                    "#DC7633"  // Awesome Copper
                ]}
                onChange={(color) => state.color = color.hex}
            />
        </div>
    )
}

export default ColorPicker