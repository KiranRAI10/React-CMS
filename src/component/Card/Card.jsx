

const Card = () => {
  return (
    <div>
       <div className="card" style={{width: "18rem"}}>
    
    {blogs.map((blog) =>{
      return(

<div key={blog._id} className="card-body">
  <h5 className="card-title">{blog.title}</h5>
  <h5 className="card-title">{blog.subTitle}</h5>
  <p className="card-text">{blog.description}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>

      )


    })}
  </div>

      </div>
  )
}

export default Card