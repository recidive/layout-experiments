import React from 'react'

import Grid from './Grid'
import Item from './Item'

const containerStyle = {
  outline: '1px dotted blue',
}

const itemStyle = {
  outline: '1px dotted red',
  padding: '1rem',
}

const App = () => (
  <Grid style={ containerStyle } component='section' gap='1rem' columnSize='1fr' rowSize='auto'>

    <Item style={ itemStyle } component='header' x={ 1 } y={ 1 } cols={ 12 } rows={ 2 }>
      <h1>App Logo</h1>
    </Item>

    <Item style={ itemStyle } component='aside' x={ 1 } y={ 3 } cols={ 4 } rows={ 3 }>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </Item>

    <Item style={ itemStyle } component='main' x={ 5 } y={ 3 } cols={ 8 } rows={ 3 }>
      <h1>Main Text</h1>
      <p>Netus maecenas optio, expedita? Hac minim. Quaerat fugit incididunt doloremque molestias cillum mus tempus, accumsan lectus! Sit adipisci! Dolorum, cras animi aliquip error interdum. Accumsan perferendis hymenaeos sequi. Ullam lacinia, scelerisque tenetur netus aperiam fermentum quasi, pulvinar? Praesentium iure sint, mi eget, minima. Pulvinar in porro nobis natus, penatibus veritatis montes lorem primis leo inceptos, porttitor accusantium dicta ex! Ipsum? Delectus blanditiis turpis porro dui voluptatum animi voluptatem? Mollit aptent, distinctio, semper, faucibus enim nihil facilis sit! Nibh non? Atque commodo sapiente consectetur congue, scelerisque temporibus, mi exercitation, nobis molestias exercitation, fusce, minim laoreet malesuada! Urna! Laboriosam laudantium praesentium, sollicitudin.</p>
      <p>Tristique montes eu nibh, ipsum urna a consequatur omnis itaque. Aenean maecenas, itaque fuga dignissim, rhoncus, phasellus quam, consectetuer minus. Cupiditate hac animi quaerat condimentum! Repudiandae ea, magnis elementum natus? Nemo cupidatat, ligula culpa? Minima corrupti, quibusdam ornare, occaecati, molestias, mauris harum veritatis parturient. Dolores mollis impedit risus. Curae eum? Ab ab, quia feugiat a wisi, cupiditate hendrerit modi quisquam? Magnam quisque nobis saepe. Hendrerit? Torquent, doloribus rutrum, torquent unde, aliquid ipsum? Error. Sociis assumenda atque vehicula, reprehenderit? Unde laboris, assumenda, magnis varius conubia, aute! Earum, placeat reiciendis, culpa alias, magnis posuere tincidunt elit ridiculus exercitation, proin pellentesque risus aliqua.</p>
      <p>Sagittis quis ultrices, fugiat, cras, consequuntur officia in laoreet augue lacus? Potenti, harum rerum tortor expedita expedita commodi imperdiet tempore quos omnis. Sapiente mus, sit curabitur habitasse iste modi laboris quis consectetuer congue repellat perspiciatis egestas, porta penatibus quasi, veniam varius bibendum, consectetuer dignissimos, nesciunt, repellat metus. Eget, quod, rem mollit? Luctus justo molestiae in totam magna temporibus sequi eu, a adipisicing, molestias integer faucibus nonummy? Pede eros? Ullamco sodales. Luctus consequuntur rhoncus nulla vero fames dictum quisque felis placeat vero omnis curabitur dolore, sociis ducimus doloribus dis fringilla beatae, non ligula quidem litora. Vivamus mollitia. Quo mauris, minima consequatur.</p>
    </Item>

    <Item style={ itemStyle } component='section' x={ 1 } y={ 6 } cols={ 4 } rows={ 3 }>
      <h2>Block One</h2>
      <p>Netus maecenas optio, expedita? Hac minim. Quaerat fugit incididunt doloremque molestias cillum mus tempus, accumsan lectus! Sit adipisci! Dolorum, cras animi aliquip error interdum. Accumsan perferendis hymenaeos sequi. Ullam lacinia, scelerisque tenetur netus aperiam fermentum quasi, pulvinar? Praesentium iure sint, mi eget, minima. Pulvinar in porro nobis natus, penatibus veritatis montes lorem primis leo inceptos, porttitor accusantium dicta ex! Ipsum? Delectus blanditiis turpis porro dui voluptatum animi voluptatem? Mollit aptent, distinctio, semper, faucibus enim nihil facilis sit! Nibh non? Atque commodo sapiente consectetur congue, scelerisque temporibus, mi exercitation, nobis molestias exercitation, fusce, minim laoreet malesuada! Urna! Laboriosam laudantium praesentium, sollicitudin.</p>
    </Item>

    <Item style={ itemStyle } component='section' x={ 5 } y={ 6 } cols={ 4 } rows={ 3 }>
      <h2>Block Two</h2>
      <p>Tristique montes eu nibh, ipsum urna a consequatur omnis itaque. Aenean maecenas, itaque fuga dignissim, rhoncus, phasellus quam, consectetuer minus. Cupiditate hac animi quaerat condimentum! Repudiandae ea, magnis elementum natus? Nemo cupidatat, ligula culpa? Minima corrupti, quibusdam ornare, occaecati, molestias, mauris harum veritatis parturient. Dolores mollis impedit risus. Curae eum? Ab ab, quia feugiat a wisi, cupiditate hendrerit modi quisquam? Magnam quisque nobis saepe. Hendrerit? Torquent, doloribus rutrum, torquent unde, aliquid ipsum? Error. Sociis assumenda atque vehicula, reprehenderit? Unde laboris, assumenda, magnis varius conubia, aute! Earum, placeat reiciendis, culpa alias, magnis posuere tincidunt elit ridiculus exercitation, proin pellentesque risus aliqua.</p>
    </Item>

    <Item style={ itemStyle } component='section' x={ 9 } y={ 6 } cols={ 4 } rows={ 3 }>
      <h2>Block Three</h2>
      <p>Sagittis quis ultrices, fugiat, cras, consequuntur officia in laoreet augue lacus? Potenti, harum rerum tortor expedita expedita commodi imperdiet tempore quos omnis. Sapiente mus, sit curabitur habitasse iste modi laboris quis consectetuer congue repellat perspiciatis egestas, porta penatibus quasi, veniam varius bibendum, consectetuer dignissimos, nesciunt, repellat metus. Eget, quod, rem mollit? Luctus justo molestiae in totam magna temporibus sequi eu, a adipisicing, molestias integer faucibus nonummy? Pede eros? Ullamco sodales. Luctus consequuntur rhoncus nulla vero fames dictum quisque felis placeat vero omnis curabitur dolore, sociis ducimus doloribus dis fringilla beatae, non ligula quidem litora. Vivamus mollitia. Quo mauris, minima consequatur.</p>
    </Item>

    <Item style={ itemStyle } component='section' x={ 1 } y={ 9 } cols={ 12 } rows={ 3 }>
      <h2>Nested Grid</h2>
      <Grid style={ containerStyle } component='section' gap='1rem' columnSize='1fr' rowSize='auto'>
        <Item style={ itemStyle } component='section' x={ 1 } y={ 1 } cols={ 6 } rows={ 3 }>
          <h2>Block One</h2>
          <p>Netus maecenas optio, expedita? Hac minim. Quaerat fugit incididunt doloremque molestias cillum mus tempus, accumsan lectus! Sit adipisci! Dolorum, cras animi aliquip error interdum. Accumsan perferendis hymenaeos sequi. Ullam lacinia, scelerisque tenetur netus aperiam fermentum quasi, pulvinar? Praesentium iure sint, mi eget, minima. Pulvinar in porro nobis natus, penatibus veritatis montes lorem primis leo inceptos, porttitor accusantium dicta ex! Ipsum? Delectus blanditiis turpis porro dui voluptatum animi voluptatem? Mollit aptent, distinctio, semper, faucibus enim nihil facilis sit! Nibh non? Atque commodo sapiente consectetur congue, scelerisque temporibus, mi exercitation, nobis molestias exercitation, fusce, minim laoreet malesuada! Urna! Laboriosam laudantium praesentium, sollicitudin.</p>
        </Item>
        <Item style={ itemStyle } component='section' x={ 7 } y={ 1 } cols={ 6 } rows={ 3 }>
          <h2>Block Two</h2>
          <p>Tristique montes eu nibh, ipsum urna a consequatur omnis itaque. Aenean maecenas, itaque fuga dignissim, rhoncus, phasellus quam, consectetuer minus. Cupiditate hac animi quaerat condimentum! Repudiandae ea, magnis elementum natus? Nemo cupidatat, ligula culpa? Minima corrupti, quibusdam ornare, occaecati, molestias, mauris harum veritatis parturient. Dolores mollis impedit risus. Curae eum? Ab ab, quia feugiat a wisi, cupiditate hendrerit modi quisquam? Magnam quisque nobis saepe. Hendrerit? Torquent, doloribus rutrum, torquent unde, aliquid ipsum? Error. Sociis assumenda atque vehicula, reprehenderit? Unde laboris, assumenda, magnis varius conubia, aute! Earum, placeat reiciendis, culpa alias, magnis posuere tincidunt elit ridiculus exercitation, proin pellentesque risus aliqua.</p>
        </Item>
      </Grid>
    </Item>

    <Item style={ itemStyle } component='footer' x={ 1 } y={ 12 } cols={ 12 } rows={ 3 }>
      <p>Netus maecenas optio, expedita? Hac minim. Quaerat fugit incididunt doloremque molestias cillum mus tempus, accumsan lectus! Sit adipisci! Dolorum, cras animi aliquip error interdum. Accumsan perferendis hymenaeos sequi. Ullam lacinia, scelerisque tenetur netus aperiam fermentum quasi, pulvinar? Praesentium iure sint, mi eget, minima. Pulvinar in porro nobis natus, penatibus veritatis montes lorem primis leo inceptos, porttitor accusantium dicta ex! Ipsum? Delectus blanditiis turpis porro dui voluptatum animi voluptatem? Mollit aptent, distinctio, semper, faucibus enim nihil facilis sit! Nibh non? Atque commodo sapiente consectetur congue, scelerisque temporibus, mi exercitation, nobis molestias exercitation, fusce, minim laoreet malesuada! Urna! Laboriosam laudantium praesentium, sollicitudin.</p>
    </Item>

  </Grid>
)

export default App
