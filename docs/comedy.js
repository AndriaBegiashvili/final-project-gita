image_array = [
    'mimino.jpg',
    'vera.jpg',
    'sherekil.jpg',
    'udiplomo.jpg'
  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);
    selected_image = image_array[random_index]
  
 
    document.getElementById('image_shower').src = `${selected_image}`
  }