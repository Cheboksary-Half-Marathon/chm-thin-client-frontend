import React from 'react';
import logo from '../assets/chebHalfMarathonlogo.svg'

const Main = ({list,galleryItems}) => {
    return (
        <div className="main-container">
           <section className="section-info main-container-section__info">
               <div className="section-info-list">
                   <img src={logo} alt="chebHalfMarathonlogo" />
                   {list.map((item,index) => (
                       <li key={index}>{item}</li>
                   ))}
               </div>
               <div className="section-info-description">
                    <h1 className="section-info-heading">Регистрация на все маршруты закрыта, так как достигнут лимит участников</h1>
                    <h2 className="section-info-headingSmall">Дополнительной регистрации не будет</h2>
                    <p className="section-info-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum tellus a eleifend ultrices. Morbi a arcu ut mi accumsan ornare.
                        Integer lobortis consequat leo, ac congue urna pretium vel. Integer orci magna, posuere faucibus dapibus non, vestibulum lobortis sapien.
                        Sed sapien justo, maximus vitae odio a, dictum lacinia sem. Integer posuere tempus dui, nec ullamcorper diam dictum vel. Etiam aliquet dolor commodo, placerat lorem vel, semper libero. Donec eu felis et sapien facilisis egestas. Nulla in neque lorem.
                        Mauris suscipit lobortis velit eu luctus. Curabitur nisl velit, tempus cursus venenatis sed, luctus efficitur purus.
                        Aliquam quis imperdiet lacus, consectetur lacinia nunc. Nullam at metus magna. Ut aliquet mi in odio vestibulum malesuada. Sed vestibulum a elit nec molestie. Vestibulum congue lacinia ipsum in maximus. Sed malesuada in mi in fermentum. Morbi eget cursus enim. Etiam et sagittis elit, sed suscipit velit. Duis convallis, metus in tempus gravida, lorem arcu ullamcorper nunc, in mattis diam quam sit amet nibh. Proin ornare, diam non tincidunt malesuada, diam sapien ullamcorper eros, eu efficitur augue mauris ut ante. Integer tristique lorem nec ultrices mattis.
                        Nulla quis imperdiet sapien. Aenean sit amet ligula pellentesque, mattis lacus a, sagittis arcu. Suspendisse volutpat urna et elit efficitur, eget pulvinar urna pharetra.
                    </p>
               </div>
           </section>
            <section className="section-gallery main-container-section__gallery">
                {galleryItems.map((item, index) => (
                    <img src={item.img} alt='galleryItem' key={index}/>
                ))}
            </section>
        </div>
    );
};

export default Main;