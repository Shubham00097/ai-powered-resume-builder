import React, { useState } from 'react'
import { Palette, Check } from 'lucide-react'

function ColorPicker({ selectedColor, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const colors = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Lime', value: '#84cc16' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Fuchsia', value: '#d946ef' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Navy', value: '#1e40af' },
    { name: 'Slate', value: '#64748b' },
    { name: 'Gray', value: '#6b7280' },
    { name: 'Zinc', value: '#71717a' },
    { name: 'Stone', value: '#78716c' },
    { name: 'Brown', value: '#92400e' },
    { name: 'Black', value: '#18181b' },
  ]

  // Convert hex to rgba with opacity
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 text-sm font-medium hover:opacity-90 transition-all px-3 py-2 rounded-lg'
        style={{ 
          backgroundColor: hexToRgba(selectedColor, 0.15),
          color: selectedColor 
        }}
      >
        <Palette size={16} />
        <span>Accent</span>
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 w-72 p-4 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-lg'>
          <h3 className='text-xs font-semibold text-gray-500 uppercase mb-3'>
            Accent Color
          </h3>
          <div className='grid grid-cols-8 gap-2'>
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => {
                  onChange(color.value)
                  setIsOpen(false)
                }}
                className='relative group'
                title={color.name}
              >
                <div
                  className={`w-8 h-8 rounded-md cursor-pointer transition-all hover:scale-110 ${
                    selectedColor === color.value
                      ? 'ring-2 ring-offset-2 ring-gray-400'
                      : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.value && (
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <Check className='w-4 h-4 text-white drop-shadow-md' />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ColorPicker