        console.dir(document);
        console.log(document.domain);
        console.log(document.URL);
        console.log(document.title);
        document.title = 123;  // we can assign 123 to the title
        console.log(document.doctype);
        console.log(document.head);
        console.log(document.body);
        
        console.log(doctype);

        // GETELEMENTBYID - we can access elements by their ids//  

        console.log(document.getElementById('header-title'));
        var headerTitle = document.getElementById('header-title');
        console.log(headerTitle);

        headerTitle.style.borderBottom ='solid 3px #000';

        headerTitle.innerText = 'Goodbye';

        headerTitle.innerHTML='<h3>Hello</h3>';

         // GETELEMENTBYCLASSNAME - we can access elements by their classes but we know that class is plural,  
         // so that we need to write in loop.

         var items = document.getElementsByClassName('list-group-item');
         console.log(items);

         items[0].style.borderBottom=0;
         items[1].textContent = 'Hello 2';
         items[1].style.fontWeight='bold';
         items[2].style.backgroundColor='yellow';
         // items.style.backgroundColor='red'; hata verir çünkü döngü 
         //içerisinde tek tek atama yapmamız gerekiyor
         for(var i=0; i < items.length; i++){
             items[i].style.backgroundColor = '#f4f4f4';

         }

         // GETELEMENTSBYTAGNAME - same getElementsByClassName, only difference is that we use tags.//

         var li= document.getElementsByTagName('li');
         console.log(li);
         console.log(li[1]);

         li[2].textContent = 'Hi';
         li[3].style.fontWeight='bold';

         for(var i=0; i<li.length; i++){
             items[i].style.backgroundColor = 'white';
         }

         // QUERYSELECTOR - selects the first element with the attribute what we indicated// 

         var header = document.querySelector("#main-header");
         header.style.borderBottom = '4px solid blue';

         var input = document.querySelector('input');
         input.style.backgroundColor = 'red'; // for ex; if HTML file has 2 input tags, querySelector selects first one
         input.placeholder = 'Hello World'; 

         var submit = document.querySelector('input[type="submit"]'); // if we want to select other one, we can select in this way.
         submit.value="dskjfkdjfkf";  

         var item = document.querySelector('.list-group-item');  //this selector selects the first item whose class is list-group-item
         item.textContent = "blablabla"; 
         
         var lastItem = document.querySelector('.list-group-item:last-child'); // this selector selects the last item whose class is list-group-item in this way
         lastItem.style.backgroundColor = 'black';
         lastItem.style.color='white';

         var secondItem = document.querySelector('.list-group-item:nth-child(2)'); // if we want to select other items in list-group-item class, then we can use nth-child attribute.
         secondItem.style.color='purple';  


         // QUERYSELECTORALL - same getElementsByTagName and getElementsByClassName. querySelectorAll allows to select more than one item.//
         var titles = document.querySelectorAll('.list-group-item'); 
         for(var i=0; i<items.length; i++){  //we knew querySelectorAll allows to select more than one item, so we should use loop.
            titles[i].style.backgroundColor = 'green';
         }
         titles[2].style.color='orange';  // or if we want to assign only one element, than we can use index.  
         console.log(titles);
         

         var odd=document.querySelectorAll('li:nth-child(odd)');
         odd[0].style.backgroundColor = 'yellow'; //we want to assign only one element, than we can use index.
         for(var i=0; i<odd.length; i++){
             odd[i].style.backgroundColor = 'darkgray';  //çoklu değişiklik yapacağımız için for döngüsünü kullandık.
         } // we want to select more than one element, so we used the for loop.


         // we can do the same operation above the even numbers: 

         var even = document.querySelectorAll('li:nth-child(even)');
         even[0].style.color='darkgreen';









        




        





        
