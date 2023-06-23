export default function MissionVisionObjectiveSection() {
  return (
    <section>
      <div className="container three-column-grid">
        {[
          {
            title: "MISSION",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            ducimus animi iusto fugiat vero labore quisquam natus nam ab
            dolore ullam, cum illum expedita possimus architecto, esse non sed
            sint.`,
          },
          {
            title: "MISSION",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            ducimus animi iusto fugiat vero labore quisquam natus nam ab
            dolore ullam, cum illum expedita possimus architecto, esse non sed
            sint.`,
          },
          {
            title: "MISSION",
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            ducimus animi iusto fugiat vero labore quisquam natus nam ab
            dolore ullam, cum illum expedita possimus architecto, esse non sed
            sint.`,
          },
        ].map(({ title, description }) => (
          <div className="">
            <h3>{title}</h3>
            <span className="accent-line"></span>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
