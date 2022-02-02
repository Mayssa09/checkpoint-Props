import "./App.css";
import Profile from "./profile/Profile";
import me from "./me.jpg";
const handleName = () => {
  alert("Hello ! My name is Mtar Mayssa");
};
let name = "Mtar Mayssa";
let mybio =
  "I'm a chemical engineer with one year of experience working alongside the executive team of a Fortune 500 company. I'm specializes in polymer chemistry, and now i'm studying web developer skills. Also, i'm a powerful force in the workplace and i use my positive attitude and tireless energy to encourage others to work hard and succeed. In my free time, i like to hike and play sport";
let myprofession = "Chemical engineer and Web developper";
const App = () => {
  return (
    <div className="App">
      <Profile
        fullName={name}
        bio={mybio}
        profession={myprofession}
        alert={handleName}
      >
        <img
          src={me}
          style={{ width: 350, height: 350, borderRadius: "50%" }}
          alt="hello, it's me"
        />
      </Profile>
    </div>
  );
};

export default App;
