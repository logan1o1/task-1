import React,{useState} from 'react'

export default function WordCounter() {
    const [paragraph, setParagraph] = useState('');
  
    const handleChange = (e) => {
      setParagraph(e.target.value);
    }
  
    const wordCount = paragraph.split(/\s+/).filter(Boolean).length;
  
    return (
      <div>
        <textarea
          placeholder="Enter a paragraph..."
          value={paragraph}
          onChange={handleChange}
        />
        <p>Word Count: {wordCount}</p>
      </div>
    );
  
}
