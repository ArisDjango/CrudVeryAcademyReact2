-## Seri ini adalah bagian dari project DRF, lanjutan seri backend [disini](https://github.com/ArisDjango/CrudVeryAcademy)
# DAFTAR ISI
- [ B. FRONT END - REACT ](#B)
    - [ 1. Instalasi React.js ](#B1)
    - [ 2. Struktur Components project ](#B2)
    - [ 3. index.js ](#B3)
    - [ 4. Testing Koneksi dari django API ](#B4)
    - [ 5. Header.js ](#B5)
    - [ 6. Footer.js ](#B6)
    - [ 7. Posts.js ](#B7)
    - [ 8. PostsLoading.js ](#B8)
    - [ 9. App.js ](#B9)

<a name="B"></a>
# B. FRONT END - REACT
<a name="B1"></a>
## 1. Instalasi React.js
- Instalasi React
    - `npx create-react-app blogapi`
    - `cd blogapi`
    - `yarn start`
    - Install beberapa library:
        - `yarn add react-router-dom`
        - `yarn add @material-ui/core`
<a name="B2"></a>
## 2. Struktur Components project
- App.js --> Mengambil data dari api, mengambil kondisi dari postloading.js 
- Buat Folder `components`, lalu buat file baru
    - Footer.js
    - Header.js
    - Posts.js --> props dan mengatur style tampilan
    - PostLoading.js --> menampilkan pesan loading selama koneksi dengan api
- index.js --> routing, switch url, merender  semua component

<a name="B3"></a>
## 3. index.js

- Tujuan:
    - routing, switch url, merender  semua component,
    - memastikan semua component berhasil dirender
- Langkah :
    - Buat component sederhana dulu pada Footer.js dan Header.js
    - import semua kebutuhan
    - buat `const routing`:
        - `<Header>`
        - `<Switch><Route>` memanggil component `<App>` sebagai content
        - `<Footer>`
        - render `const routing`
    - ==============================

    - Eksekusi
        - Footer.js dan Header.js perlu dibuat component sederhana dulu karena kedua komponen ini akan diimport oleh index.js. pastikan juga telah di export agar bisa dipanggil komponennya
        - buka index.js, code:


    
            ```
            import React from 'react';
            import ReactDOM from 'react-dom';

            import './index.css';
            import {BrowserRouter as Router,mSwitch, Route
            } from "react-router-dom";

            import App from './App';
            import Header from './components/Header';
            import Footer from './components/Footer';


            const routing = (

            <Router>
                <React.StrictMode>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
                <Footer />
                </React.StrictMode>
            </Router>
            );


            ReactDOM.render(routing, document.getElementById('root'));
            ```
<a name="B4"></a>
## 4. Testing Koneksi dari django API
- Tujuan:
    - Melakukan testing koneksi antara django api dengan react,
    - memastikan distribusi data berjalan lancar
- Langkah :
    - componentdidmount()
        - var url api, var tsb lalu di fetch, lalu tambahkan premise
        - premise 1 = mengambil respon dalam bentuk json
        - premise 2 = menampilkan data json di console
    - render() kalimat sederhana di browser
- ======================================
- eksekusi:
    - Sebelumnya, Pastikan instalasi django-cors-headers di django api telah terpasang

    - 
            ```
                MIDDLEWARE = [
                    'corsheaders.middleware.CorsMiddleware',]
            ```
    - 
            ```
                CORS_ALLOWED_ORIGINS = [
                "http://localhost:3000",
                "http://127.0.0.1:3000"
                ]
            ```
- Buka App.js, code:

        ```
            import React from 'react';

                class connectionExample extends React.Component {
                    componentDidMount() {
                        const apiUrl = 'http://127.0.0.1:8000/api/'
                        fetch(apiUrl)
                        .then((response) => response.json())
                        .then((data) => console.log(data))
                    }

                    render() {
                        return <div>Ini adalah contoh data</div>
                    }
                    }

                    export default connectionExample
        ```
    - Jika dijalankan di frontend (http://localhost:3000/) maka pada console akan tampak file json dari api
    - Jika ada ERROR: Permasalahan yang muncul biasnya ada di CORS, ada di setting/allowed, alamat yang diijinkan harus sesuai dengan yg ada di browser dan settingan frontend, contoh http/https, 127.0.0.1/localhost.
    - setelah  koneksi frontend-backend dipastikan berhasil. saatnya membuat code yang sesungguhnya.

<a name="B5"></a>
## 5. Header.js

- Pada Header.js, Buat komponen `<Header>`
    - code:
        ```
        import React from 'react';
        import AppBar from '@material-ui/core/AppBar';
        import Toolbar from '@material-ui/core/Toolbar';
        import Typography from '@material-ui/core/Typography';
        import CssBaseline from '@material-ui/core/CssBaseline';
        import {makeStyles} from '@material-ui/core/Styles';

        const useStyles = makeStyles((theme) => ({
            appBar: {
                borderBottom: `1px solid ${theme.palette.divider}`,
            },
        })
        );

        function Header (){
            const classes = useStyles();
            return(
                
                <React.Fragment>
                    <CssBaseline/>
                    <AppBar
                        position="static" 
                        color="white" 
                        elevation={0}
                        className={classes.appBar}
                    >
                        <Toolbar>
                            <Typography variant="h6" color="inherit" noWrap>
                                BlogmeUp
                            </Typography>

                        </Toolbar>
                    </AppBar>
                </React.Fragment>
            );
            
        }

        export default Header;
        ```

    - Pada Footer.js, Buat komponen `<Footer>`
        - code:

<a name="B6"></a>
## 6. Footer.js

- Pada Footer.js, Buat komponen `<Footer`
    - code:

<a name="B7"></a>
## 7. Posts.js
- Tujuan:
    - sebagai props,
        - props disini belum dapat data, data dari api di handle oleh App.js yang akan dibuat pada bab selanjutnya
        - Jadi logicnya seolah-olah sudah dapat data, padahal belum
    - mengatur style material-ui
    - mengatur data yang didapat dan menempatkannya pada layout
- Langkah :
    - Import semua kebutuhan, terutama material-ui
    - const useStyles => pengatur object2 material-ui
    - const Posts => sebagai props
        - instanisasi const posts = props, classes = useStyles()
        - Jika tidak ada posts/0 maka akan tampil pesan 'postingan kosong' jika ada post akan dikembalikan ke return()
        - return(mengatur layout post)
    - export
- ================================================
- Eksekusi:
    - Buka Posts.js
        - code:
            ```
            import React from 'react'
            import {makeStyles} from '@material-ui/core/styles';
            import Card from '@material-ui/core/Card';
            import CardContent from '@material-ui/core/CardContent';
            import CardMedia from '@material-ui/core/CardMedia';
            import Grid from '@material-ui/core/Grid';
            import Typography from '@material-ui/core/Typography';
            import Container from '@material-ui/core/Container';

            const useStyles = makeStyles((theme) => ({
                cardMedia:{
                    paddingTop: '56.25%',//16:9
                },
                link: {
                    margin: theme.spacing(1, 1.5),
                },
                cardHeader: {
                    backgroundColor:
                        theme.palette.type === 'light'? theme.palette.grey[200]:theme.palette.grey[700],

                },
                postTitle: {
                    fontSize: '16px',
                    textAlign: 'left',
                },
                postText: {
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'baseline',
                    fontSize: '12px',
                    textAlign: 'left',
                    marginBottom: theme.spacing(2),
                },
            }));

            const Posts = (props) => {
                const {posts} = props;
                const classes = useStyles();
                if(!posts || posts.length === 0) return <p>cant find posts</p>
                return (
                    <React.Fragment>
                        <Container maxWidth="md" component="main">
                            <Grid container spacing={5} alignItems="flex-end">
                                {posts.map((post) => {
                                    return (
                                        //Eneterprise card is full width at sm breakpoint
                                        <Grid item key={post.id} xs={12} md={4}>
                                            <Card className={classes.card}>
                                                <CardMedia 
                                                    className={classes.cardMedia}
                                                    image="https://source.unsplash.com/random"
                                                    title="Image title"
                                                />
                                                <CardContent className={classes.cardContent}>
                                                    <Typography
                                                            gutterBottom
                                                            variant="h6"
                                                            component="h2"
                                                            className={classes.postTitle}
                                                        >
                                                            {post.title.substr(0, 50)}...
                                                        </Typography>
                                                        <div className={classes.postText}>
                                                            <Typography
                                                                component="h3"
                                                                color="textPrimary"
                                                            ></Typography>
                                                            <Typography variant="h6" color="textSecondary">
                                                                {post.excerpt.substr(0, 60)}...
                                                            </Typography>
                                                        </div>
                                                </CardContent>

                                            </Card>
                                        </Grid>
                                    )
                                })}

                            </Grid>
                        </Container>
                    </React.Fragment>
                )
            }

            export default Posts; 
            ```
<a name="B8"></a>
## 8. PostsLoading.js
- Tujuan:
    - Menghandle kondisi loading
    - .
- Langkah :
    - function PostLoading:
        - function PostLoadingComponent(isLoading->props)
            - (nilai isLoading disini akan diambil(props) oleh App.js, untuk diberi nilai True/False)
            - jika !isLoading
            - return -> menampilkan pesan loading

- ====================================
- Ekseskusi
    - Pada Footer.js, Buat komponen `<Footer`
    - code:
        ```
        import React from 'react'

        function PostLoading(Component) {
            return function PostLoadingComponent({ isLoading, ...props }) {
                if (!isLoading) return <Component {...props} />;
                return (
                    <p style={{fontSize: '25px'}}>
                        We are waiting for the data to load!...

                    </p>
                )
            }
        }

        export default PostLoading;
        ```

<a name="B9"></a>
## 9. App.js
- Tujuan:
    - Menghandle pengambilan data api dari backend
    - Jika data sudah didapat, mengambil komponen `<PostLoading>` sebagai manajemen loading
- Langkah :
    - import kebutuhan state
    - import Posts dan PostLoading
    - App()
        - PostLoading=mengambil dari PostLoadingComponent
        - const appState=Memberikan nilai awal state dengan object loading dan posts
        - useEffect() => menghandle koneksi api
            - mengubah nilai state loading:True (nilai awal state:false) sehingga menampilkan pesan loading dari PostLoading.js 
            - const apiUrl = alamat url api
            - fetch apiUrl --> jika koneksi api berhasil, lanjut ke premise
                - premise 1 = mengambil data dalam bentuk json, jika berhasil
                - premise 2 = menampilkan post, dan mematikan loading (false)
                - `[setAppState]` untuk memasukkan hasil fetch kedalam state
            - return()
                - Memanggil `<PostLoading>` dan memberi nilai isLoading sehingga bisa menentukan apakah akan menampilkan pesan loading, atau mematikannya dan menampilkan hasil post 
- Eksekusi:
    - Buka App.js, 
    - code:
        ```
        import React, {useEffect, useState} from 'react';
        import './App.css';
        import Posts from './components/Posts';
        import PostLoadingComponent from './components/PostLoading';

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
        ```

    

