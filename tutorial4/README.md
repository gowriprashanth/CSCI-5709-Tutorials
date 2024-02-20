# Tutorial 4
* *Name*:Gowri Prashanth Kanagaraj
* *Date Created*: 19 Feb 2024
* *Last Modification Date*: 19 Feb 2024
* *GitLab - Tutorials URL*: <https://git.cs.dal.ca/kanagaraj/csci-5709-tutorials>
* *GitLab - Tutorial 3 URL*:<https://git.cs.dal.ca/kanagaraj/csci-5709-tutorials/-/tree/main/tutorial4>
 * *Deployment*: 
 * *GitLab - Assignments URL*: <https://git.cs.dal.ca/kanagaraj/csci-5709-assignments>

 ## Sources Used

### File Name - ProfileListing.js

*Lines 13 - 22*

```
  useEffect(()=>{
     axios.get(profilesUrl)
     .then((response)=>
            {   
                setListing(response.data);
                console.log(response.data)
            } 
            )   
      .catch((err)=>{console.log(err)});}, []
        )
```

The code above was created by adapting the code in [freecodecamp](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) as shown below: 

```
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

```

*Lines 24 - 28*

```
const filteredList = listing.filter(
            (data) =>
              data.name.toLowerCase().includes(search.toLowerCase()) ||
              data.name.toLowerCase().includes(search.toLowerCase())
          ); 
```

The code above was created by adapting the code in [stackoverflow](https://stackoverflow.com/questions/54232145/typeerror-item-name-tolowercase-include-is-not-a-function-reactjs) as shown below: 

```
item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
```

### File Name - LoginPage.js

*Lines 21-38*

```
 axios.post(loginurl,credentials)
        .then((response)=>{
            if(response.data.message==="Login success!"){
            toast.success("Login success");
            console.log(response.data)
            navigate('/profile-list');
            }
            else {
                toast.error("Incorrect email or password");
              }

        }).catch(
            (err)=>{
                console.log(err)
                toast.error("Incorrect email or password");
            }
        )
    }
```

The code above was created by adapting the code in [jasonwatmore](https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples) as shown below: 

```
  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: 'React Hooks POST Request Example' };
    axios.post('https://reqres.in/api/articles', article)
        .then(response => setArticleId(response.data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
```
