export  default function Category ({category: {id,title,image,}}){
    return (
        <a href="#">
          <img src = {image} alt={title} />
          <span>{title}</span>
        </a>
          
        
    );
}