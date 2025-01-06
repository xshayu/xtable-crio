import React, { useState } from 'react';

interface TableData {
  date: string;
  views: number;
  article: string;
}

const initialData: TableData[] = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function App() {
  const [data, setData] = useState<TableData[]>(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      
      if (dateComparison === 0) {
        return b.views - a.views;
      }
      
      return dateComparison;
    });
    
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      
      if (viewsComparison === 0) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      
      return viewsComparison;
    });
    
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={`${row.date}-${row.views}-${index}`}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
