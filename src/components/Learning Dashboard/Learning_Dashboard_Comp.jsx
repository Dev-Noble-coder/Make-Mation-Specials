import React, { useState, useEffect } from 'react';
import { BookOpen, Code2, Database, Layout, Lock } from 'lucide-react';

const topics = [
    {
        id: 'html',
        title: 'HTML Basics',
        icon: <Layout className="w-5 h-5" />,
        content: (
          <div>
            <p className="mb-4">
              HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.
            </p>
    
            <h3 className="text-xl font-semibold mb-3">Here are the key concepts you need to know:</h3>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">1. HTML Elements</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Elements are the building blocks of HTML pages</li>
                <li>Elements are represented by tags</li>
                <li>Tags usually come in pairs: opening and closing tags</li>
              </ul>
            </div>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">2. Basic Structure</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>
      </head>
      <body>
        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>
      </body>
    </html>`}</code>
              </pre>
            </div>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">3. Common Elements</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Headings: <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code></li>
                <li>Paragraphs: <code>&lt;p&gt;</code></li>
                <li>Links: <code>&lt;a&gt;</code></li>
                <li>Images: <code>&lt;img&gt;</code></li>
                <li>Lists: <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'css',
        title: 'CSS Styling',
        icon: <BookOpen className="w-5 h-5" />,
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-4">CSS Fundamentals</h3>
            <p className="mb-4">
              CSS (Cascading Style Sheets) is used to style and layout web pages.
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Basic Syntax</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`selector {
      property: value;
      property: value;
    }`}</code>
              </pre>
            </div>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Common Properties</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Colors: <code>color</code>, <code>background-color</code></li>
                <li>Typography: <code>font-size</code>, <code>font-weight</code></li>
                <li>Layout: <code>margin</code>, <code>padding</code></li>
                <li>Display: <code>flex</code>, <code>grid</code></li>
              </ul>
            </div>
          </div>
        )
      },
      {
        id: 'javascript',
        title: 'JavaScript',
        icon: <Code2 className="w-5 h-5" />,
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-4">JavaScript Essentials</h3>
            <p className="mb-4">
              JavaScript is a programming language that enables interactive web pages.
            </p>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Variables</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`// Variable declaration
    let name = 'John';
    const age = 25;
    var legacy = 'old way';`}</code>
              </pre>
            </div>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Functions</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`function greet(name) {
      return \`Hello, \${name}!\`;
    }
    
    // Arrow function
    const greet = (name) => \`Hello, \${name}!\`;`}</code>
              </pre>
            </div>
          </div>
        )
      },
      {
        id: 'database',
        title: 'Databases',
        icon: <Database className="w-5 h-5" />,
        content: (
          <div>
            <h3 className="text-xl font-semibold mb-4">Database Fundamentals</h3>
            <p className="mb-4">
              Databases are organized collections of structured information.
            </p>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">SQL Basics</h4>
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`-- Basic SQL queries
    SELECT * FROM users;
    INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
    UPDATE users SET name = 'Jane' WHERE id = 1;`}</code>
              </pre>
            </div>
    
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2">Common Database Types</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Relational (SQL): PostgreSQL, MySQL</li>
                <li>Document (NoSQL): MongoDB</li>
                <li>Key-Value: Redis</li>
                <li>Graph: Neo4j</li>
              </ul>
            </div>
          </div>
        )
      }
];

function Learning_Dashboard_Comp() {
    const [activeTab, setActiveTab] = useState('html');
    const [completedTopics, setCompletedTopics] = useState(() => {
      // Load completed topics from localStorage
      const savedTopics = localStorage.getItem('completedTopics');
      return savedTopics ? JSON.parse(savedTopics) : [];
    });
    
    useEffect(() => {
      // Save completed topics to localStorage whenever they change
      localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
    }, [completedTopics]);
    
    const handleTabClick = (topicId) => {
      const currentIndex = topics.findIndex(t => t.id === topicId);
      const previousTopic = topics[currentIndex - 1];
    
      if (!previousTopic || completedTopics.includes(previousTopic.id)) {
        setActiveTab(topicId);
      }
    };
    
    const markAsCompleted = () => {
      if (!completedTopics.includes(activeTab)) {
        const updatedTopics = [...completedTopics, activeTab];
        setCompletedTopics(updatedTopics);
      }
    };

  return (
    <div className=" bg-gray-100 text-sm">
      <div className="container mx-auto py-10 px-6 ">
        <div className="flex flex-col lg:flex-row gap-6  ">
          <div className=" grid grid-cols-2  w-full gap-3 bg-white rounded-lg shadow-md p-4 lg:hidden">
            {topics.map((topic, index) => {
              const isLocked = index > 0 && !completedTopics.includes(topics[index - 1].id);
              return (
                <button
                  key={topic.id}
                  onClick={() => handleTabClick(topic.id)}
                  className={`flex-1  flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                    activeTab === topic.id
                      ? 'bg-[#CD950E] text-white'
                      : isLocked
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  disabled={isLocked}
                >
                  {topic.icon}
                  <span>{topic.title}</span>
                  {isLocked && <Lock className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </div>
          <div className="w-64 bg-white rounded-lg shadow-md p-4 hidden lg:block">
            {topics.map((topic, index) => {
              const isLocked = index > 0 && !completedTopics.includes(topics[index - 1].id);
              return (
                <button
                  key={topic.id}
                  onClick={() => handleTabClick(topic.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                    activeTab === topic.id
                      ? 'bg-[#CD950E] text-white'
                      : isLocked
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                  disabled={isLocked}
                >
                  {topic.icon}
                  <span>{topic.title}</span>
                  {isLocked && <Lock className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-6 max-h-screen overflow-y-scroll ">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {topics.find(t => t.id === activeTab)?.title}
              </h2>
          
            </div>
            <div className="prose max-h-[600px] overflow-y-auto px-3">
              {topics.find(t => t.id === activeTab)?.content}
              <button
                onClick={markAsCompleted}
                className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-green-600 transition-colors"
              >
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learning_Dashboard_Comp;
