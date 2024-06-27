import React from 'react'
import './Home.css'


export default function Home() {
  return (
    
    <> 
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div class="carousel-item active">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f57013ea-f39b-49fb-93a5-bc7933a84b9e/dg23kxf-7a224575-4fb0-4ac7-99dc-222faa76fbaf.png/v1/fill/w_1280,h_549,q_80,strp/cozy_coffee_shop_beautiful_wood_by_seasoned2travel_dg23kxf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQ5IiwicGF0aCI6IlwvZlwvZjU3MDEzZWEtZjM5Yi00OWZiLTkzYTUtYmM3OTMzYTg0YjllXC9kZzIza3hmLTdhMjI0NTc1LTRmYjAtNGFjNy05OWRjLTIyMmZhYTc2ZmJhZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.TVUoVfWNDrQ_dyAfCeejWp0UEscrL2Uh3fpE-feZjkM" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption .d-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item"style={{padding:'40px'}}>
      <img src="https://s3.mortarr.com/images/project_gallery_images/office-space-coffee-bar-and-booths.jpeg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>


  )
}
