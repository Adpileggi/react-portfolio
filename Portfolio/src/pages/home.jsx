// const styles = {
//     background: '#5AA9E6'
// }

export default function Home() {
  return (
    <div className="row">
      <div>
        <h1 className="name">About Me</h1>
      </div>
      <div className="col text-center align-self-center">
        My name is Anthony Pileggi. I am a fullstack JavaScript developer located in the
        Greater Philadelphia area. I earned a certificate in fullstack web
        development for the University of Pennslyvaina. My background working in
        hospitality provides me a unique perspecitve to resolve
      </div>

      <div className="col">
        <div>
          <img
            src="ap-pic-resize.png"
            alt="A recent picture of Anthony Pileggi with a cat on his shoulder"
            className="img-fluid"
          ></img>
        </div>
      </div>
    </div>
  );
}
