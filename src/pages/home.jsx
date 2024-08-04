const styles = {
  padding: "10px",
};

export default function Home() {
  return (
    <div className="row">
      <div>
        <h1 className="name" style={styles}>
          About Me
        </h1>
      </div>
      <div className="col text-center align-self-center">
        <p>
          My name is Anthony Pileggi. I am a fullstack developer located in the
          Greater Philadelphia area. I earned a certificate in fullstack web
          development for the University of Pennslyvaina. My background working
          in hospitality grants me a unique perspective by blending technical
          skills with a deep understanding of customer experience.
        </p>
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
