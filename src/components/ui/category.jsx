

export  default function Category ({category: {id,title,image,}}){
    return (
        <a href="#" className="imageHref">
          <img className="categoriesImage" src = {image} alt={title} />
          <span className="categoriesTitle"> {title}</span>
        </a>
          
        
    );
}