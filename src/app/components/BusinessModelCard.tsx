import { useState } from 'react';
import { Edit2, Plus, X } from 'lucide-react';

interface BusinessModelCardProps {
  title: string;
  description: string;
  items: string[];
  onAddItem: (item: string) => void;
  onRemoveItem: (index: number) => void;
  color: string;
}

export function BusinessModelCard({
  title,
  description,
  items,
  onAddItem,
  onRemoveItem,
  color
}: BusinessModelCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      onAddItem(newItem.trim());
      setNewItem('');
      setIsAdding(false);
    }
  };

  return (
    <div className={`rounded-lg border-2 ${color} bg-white p-4 shadow-sm h-full flex flex-col`}>
      <div className="mb-3">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      <div className="flex-1 space-y-2 mb-3 overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded p-2 text-sm flex items-start justify-between gap-2 group hover:bg-gray-100 transition-colors"
          >
            <span className="flex-1">{item}</span>
            <button
              onClick={() => onRemoveItem(index)}
              className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>

      {isAdding ? (
        <div className="space-y-2">
          <textarea
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter your idea..."
            className="w-full p-2 border rounded text-sm resize-none"
            rows={2}
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="flex-1 bg-blue-600 text-white px-3 py-1.5 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              Add
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewItem('');
              }}
              className="px-3 py-1.5 border rounded text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center justify-center gap-2 w-full py-2 border-2 border-dashed rounded hover:bg-gray-50 transition-colors text-sm text-gray-600"
        >
          <Plus className="size-4" />
          Add Item
        </button>
      )}
    </div>
  );
}
