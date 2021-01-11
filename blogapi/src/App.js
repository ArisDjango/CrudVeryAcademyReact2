import React, {useEffect, useState} from 'react';
import './App.css';
import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';

//const PostLoading => 
function App() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });
  //connection
  useEffect(() => {
    setAppState({loading: true});
    const apiUrl = 'http://127.0.0.1:8000/api/';
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts })
        });

    }, [setAppState]);
    return (
      <div className="App">
        <h1>Latest Post</h1>
        <PostLoading isLoading={appState.loading} posts={appState.posts} />
    
      </div>
    )
}

export default App


//==================================================
// CONNECTION EXAMPLE
// import React from 'react';


// class connectionExample extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'http://127.0.0.1:8000/api/'
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//   }

//   render() {
//     return <div>Ini adalah contoh data</div>
//   }
// }

// export default connectionExample

