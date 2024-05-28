export const Projects = (props)=>{
    return (
        <section id="projects">
          <div class="project-card">
            <img src={props.el.imageUrl} alt="project" />
            <h3>{props.el.name}</h3>
            <p>{props.el.text}</p>
            <p><a href={props.el.href}>Github Link</a></p>
          </div>
      </section>
    )
}