import React, { useState, useCallback, useEffect } from "react";
import InfoLists from "./components/list/InfoLists";
import AddNewUser from './components/input/AddNewUser';
import './App.css';

const list = [
  {
    fname: 'Sem',
    sname: 'Yunusov',
    age: 28,
    info: 'Working at Kebab shop',
  },
  {
    fname: 'Dima',
    sname: 'Khamidov',
    age: 26,
    info: 'He is trying to do something does not know',
  },
];

const App = props => {
  // const[allUser, setAllUser] = useState(list);
  const[allUser, setAllUser] = useState([]);
  const[error, setError] = useState(null);
  const[isLoading, setIsLoading] = useState(false);

 const fetchHandler = useCallback(async () => {
  setIsLoading(true);
  setError(null);

  try{
    const response = await fetch('https://userinformation-41c01-default-rtdb.europe-west1.firebasedatabase.app/user.json');

    if(!response.ok){
      throw new Error('Bad Request')
    };

    const data = await response.json();
    // console.log(data);

    const transformedMovies = Object.entries(data).map(([key, value]) => {
      return {
        id: key,
        fname: value.fname,
        sname: value.sname,
        age: value.age,
        info: value.info
      }
    });

    // const allUsers = [];
    // for (const key in data) {
    //   allUsers.push(
    //     {
    //       fname: data[key].uname,
    //       usname: data[key].sname,
    //       uage: data[key].uage,
    //       utext: data[key].info,
    //     });
    // };

    setAllUser(transformedMovies);
  }catch(err){
    setError(err);
  };

 }, []);

 useEffect(() => {
  fetchHandler()
}, []);


  const enterNewUser = async (newUres) => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await fetch('https://userinformation-41c01-default-rtdb.europe-west1.firebasedatabase.app/user.json', {
                method: 'POST',
                body: JSON.stringify(newUres),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json();
            console.log(data);

            // Here is props values (fname, sname, age, info)
            props.onAddUser();
        } catch (err) {
            setError(err.message || 'Try again');
        }
        setIsLoading(false);
    };

  return (
    <div>
      <section>
        <AddNewUser onAddUser={enterNewUser} onFetch={fetchHandler}/>
      </section>
      {/* <section>
        <button onClick={fetchHandler}>Fetch New User</button>
      </section> */}
      <section >
        <InfoLists info={allUser} />
      </section>
    </div>
  );
};

export default App;