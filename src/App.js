// import logo from './logo.svg';
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

//Actions
import { clearProfile, updateProfile } from "./redux/actions/profile.js";

function App() {
  let dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  return (
    <div className="App">
      {profile.firstName && profile.lastName && (
        <h1 className="name">{`${profile.firstName} ${profile.lastName} `}</h1>
      )}

      {profile.description && (
        <p className="description">{profile.description}</p>
      )}

      <button
        className="button"
        onClick={() => {
          dispatch(
            updateProfile(
              "Matamando",
              "Kalilani",
              "I am definetly a real person, no promises."
            )
          );
        }}
      >
        {" "}
        Make a Change
      </button>

      <button
      className="button"
        onClick={() => {
          dispatch(clearProfile());
        }}
      >
        {" "}
        Clear Everything
      </button>
    </div>
  );
}

export default App;
