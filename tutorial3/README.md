# Tutorial 3
* *Name*:Gowri Prashanth Kanagaraj
* *Date Created*: 15 Feb 2024
* *Last Modification Date*: 15 Feb 2024
* *GitLab - Tutorials URL*: <https://git.cs.dal.ca/kanagaraj/csci-5709-tutorials>
* *GitLab - Tutorial 3 URL*:<https://git.cs.dal.ca/kanagaraj/csci-5709-tutorials/-/tree/main/tutorial3>
 * *Deployment*: https://main--dainty-creponne-0ff5d6.netlify.app/
 * *GitLab - Assignments URL*: <https://git.cs.dal.ca/kanagaraj/csci-5709-assignments>

 ## Sources Used

### File Name - Profile.js

*Lines 5*

```
    const url = useLocation();

```

The code above was created by adapting the code in [educative](https://www.educative.io/answers/how-to-use-the-uselocation-hook-in-react) as shown below: 

```
const location = useLocation();
    console.log(location);

```

*Lines 6 - 9*

```
    const url = useLocation();
    const params = new URLSearchParams(url.search);
    const firstname = params.get('firstname') || 'N/A';
    const lastname = params.get('lastname') || 'N/A';
    const email = params.get('email') || 'N/A';

```

The code above was created by adapting the code in [mdn](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams) as shown below: 

```
const params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });

```

### File Name - Register.js

*Lines 17*

```
 const navigate = useNavigate();
```

The code above was created by adapting the code in [medium](https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430) as shown below: 

``
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-page');
  }

```

*Lines 19 - 29*

```
const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

```

The code above was created by adapting the code in [tabnine](https://www.tabnine.com/code/javascript/functions/react/setFormData) as shown below: 

```
const handleInputChange = ({ target }) => {
    // Get the right value for the type of input.
    const value = target.type !== "checkbox" ? target.value : get(formData[target.name], "value") === true ? false : true;

    // Update state with new value for the input.
    setFormData({
      ...formData,
      [target.name]: {
        ...formData[target.name],
        value
      }
    });
  }

  ```
*Lines 35 - 50*  

```
const newErrors = {};
        if (!formData.firstname.match(/^[a-zA-Z]+$/)) {
            newErrors.firstname = 'Only letters are allowed';
        }
        if (!formData.lastname.match(/^[a-zA-Z]+$/)) {
            newErrors.lastname = 'Only letters are allowed';
        }
        if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password.match(/(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/)) {
            newErrors.password = 'Password should contain alpha-numeric and special characters and Minimum limit is 8 characters. at least 8 characters';
        }
        if (formData.password !== formData.confPassword) {
            newErrors.confPassword = 'Passwords do not match';
        }

```
The code above was created by adapting the code in [stackoverflow](https://stackoverflow.com/questions/17401624/change-action-attribute-using-javascript-isnt-sending-to-php) as shown below:

```

function checkInput(){
var regexUser = /^(?=.{1,20}$)[a-zA-Z0-9]+$/;//all letters ad number and size between 1-20
var regextPwd = /^(?=.{8,8}$)(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/; //Password must contain 8 characters and
                                                                         // at least one number, one letter and one
                                                                         // unique character such as !#$%&?
//Email regex
var regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var errorArr = new Array(0,0,0,0,0);

document.getElementById("register").action = "databasebuilder.php";}   

```
*Lines 53*  

```
navigate(`/profile?firstname=${formData.firstname}&lastname=${formData.lastname}&email=${formData.email}`);

```
The code above was created by adapting the code in [ui](https://ui.dev/react-router-programmatically-navigate) as shown below:

```
import { useNavigate } from 'react-router-dom

function Register () {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Register</h1>
      <Form afterSubmit={() => navigate('/dashboard')} />
    </div>
  )
}

```