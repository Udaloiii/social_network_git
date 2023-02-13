import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img
                    src="https://external-preview.redd.it/T1aS95K6uq9RQwYH5KGvVmqb6_XfsGIXd_XpcavN43o.png?width=640&crop=smart&auto=webp&v=enabled&s=87175ef7a41ecb39ebf5e9d9f2809dc6b788a080"/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
            </nav>

            <div className="content">
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1552288092-76e7d732366c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3742&q=80"/>
                </div>
                <div> Avatar + description</div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
