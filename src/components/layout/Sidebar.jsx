import React from 'react';
import { NavLink } from 'react-router-dom';
import topicsData from '@/data/topics.json';

const Sidebar = () => {
  return (
    <aside>
      {topicsData.map((topic, index) => (
        <div key={index}>
          <h2>{topic.title}</h2>
          <ul>
            {topic.subtopics.map((subtopic, subIndex) => (
              <li key={subIndex}>
                <NavLink to={subtopic.link}>
                  {subtopic.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
