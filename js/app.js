  // added svg's config
  let ul_tag= document.querySelector('footer > ul');
  for(let i=0; i<ul_tag.children.length; i++){
    // get the svg tag
    let svg_tag= ul_tag.children[i].children[0].children[0];
    // remove shits
    for(let j=0; j<svg_tag.children.length; j++){
      if(svg_tag.children[j].tagName == 'title'){
        svg_tag.children[j].remove();
      }
    }
    // add classes
    svg_tag.classList.add('fill-white', 'xl:w-c-29', 'md:w-c-85', 'w-c-86', 'hover:drop-shadow-c-3', 'transition-c-6', 'duration-200', 'h-auto');
    // remove attributes
    let attr_arry= ['fill', 'color'];
    attr_arry.forEach(attr => {
      svg_tag.removeAttribute(attr);
    });
  }

  //********** toggle-btn (info/lyrics)
  let lyrics_having_album= document.getElementsByClassName('lyrics-having-album');
  let instrumental_album= document.getElementsByClassName('instrumental-album');
  let lyrics_having_single= document.getElementsByClassName('lyrics-having-single');

  // val == toggle-btn.length == dual-cnt.length
  let val=
    lyrics_having_album.length+
    instrumental_album.length+
    lyrics_having_single.length;

  // set up an array of boolean(s)
  let toggle_var= [];
  for(let i=0; i<val.length; i++){
    toggle_var[i]= false;
  }

  let toggle_btn= document.getElementsByClassName("toggle-btn");
  for(let i=0; i<toggle_btn.length; i++){
    toggle_btn[i].addEventListener('click', ()=>{
      // play with classes
      if(!toggle_btn[i].classList.contains('toggle-locked')){
        toggle_btn[i].classList.add('toggle-locked');
        setTimeout(() => {
          toggle_btn[i].classList.remove('toggle-locked');
        }, 1000);
        // play with classes
  
        // change status
        toggle_var[i]= !toggle_var[i];

        //******** config toggle-btn ********\\

        // set to 0 state | 500
        // toggle-btn opacity
        toggle_btn[i].classList.remove('opacity-100');
        toggle_btn[i].classList.add('opacity-0');

        // config
        setTimeout(() => {
          // set to 0 state | 499
          // sub-toggle-btn display
          toggle_btn[i].children[1].classList.add('hidden');
          toggle_btn[i].children[2].classList.add('hidden');

          // set to new state | 499+1
          // sub-toggle-btn display
          setTimeout(() => {
            // (show lyrics)
            if(toggle_var[i]){
              toggle_btn[i].children[0].innerHTML= 'Info';
              toggle_btn[i].children[2].classList.remove('hidden');
            }
            // (show info)
            else{
              // Tracklist -> .instrumental-album
              if(toggle_btn[i].parentElement.parentElement.parentElement.classList.contains('instrumental-album')){
                toggle_btn[i].children[0].innerHTML= 'Tracklist';
              }
              else{
                toggle_btn[i].children[0].innerHTML= 'Lyrics';
              }
              toggle_btn[i].children[1].classList.remove('hidden');
            }
          }, 1);
        }, 499);

        // set to new state
        // toggle-btn opacity
        setTimeout(() => {
          toggle_btn[i].classList.remove('opacity-0');
          toggle_btn[i].classList.add('opacity-100');
        }, 500);

        //******** config corresponding dual-cnt ********\\

        // get the element
        let dual_cnt= document.getElementsByClassName("dual-cnt");
        let corresponding_dual_cnt= dual_cnt[i];
  
        // set to 0 state | 500
        // corresponding-dual-cnt opacity
        corresponding_dual_cnt.classList.remove('opacity-100');
        corresponding_dual_cnt.classList.add('opacity-0');

        // config
        setTimeout(() => {
          // set to 0 state | 499
          // info/lyrics display
          corresponding_dual_cnt.children[1].classList.remove('flex','sm:flex-row', 'flex-col');
          for(let j=0; j<corresponding_dual_cnt.children.length; j++){
            corresponding_dual_cnt.children[j].classList.add('hidden');
          }
  
          // set to new state | 499+1
          // info/lyrics display
          setTimeout(() => {
            // show lyrics
            if(toggle_var[i]){
              corresponding_dual_cnt.children[1].classList.remove('hidden');
              if(toggle_btn[i].parentElement.parentElement.parentElement.classList.contains('lyrics-having-album')){
                corresponding_dual_cnt.children[1].classList.add('flex','sm:flex-row', 'flex-col');
              }
            }
            // show info
            else{
              corresponding_dual_cnt.children[0].classList.remove('hidden');
            }
          }, 1);
        }, 499);
  
        // set to new state
        // corresponding-dual-cnt opacity
        setTimeout(() => {
          corresponding_dual_cnt.classList.remove('opacity-0');
          corresponding_dual_cnt.classList.add('opacity-100');
        }, 500);
      }
    });
  }

  //********** lyrics
  for(let i=0; i<lyrics_having_album.length; i++){
    let dual_cnt= lyrics_having_album[i].children[1].children[1];
    let track_name_parent= dual_cnt.children[1].children[0].children[0].children[1];
    let lyrics_having_track_name= track_name_parent.getElementsByTagName('button');
    let track_lyrics= dual_cnt.children[1].children[1].children;
    for(let j=0; j<lyrics_having_track_name.length; j++){
      lyrics_having_track_name[j].addEventListener('click', ()=>{
        // play with classes
        if(!lyrics_having_track_name[j].classList.contains('another-track-name-locked') && !lyrics_having_track_name[j].classList.contains('bg-c-gray-4')){
          // corresponding lyrics
          for(let k=0; k<lyrics_having_track_name.length; k++){
            if(k != j){
              lyrics_having_track_name[k].classList.add('another-track-name-locked');
            }
          }
          setTimeout(() => {
            for(let k=0; k<lyrics_having_track_name.length; k++){
              lyrics_having_track_name[k].classList.remove('another-track-name-locked');
            }
          }, 1000);
          // play with classes

          // set to 0 state
          // btn bg-color
          for(let k=0; k<lyrics_having_track_name.length; k++){
            lyrics_having_track_name[k].classList.remove('bg-c-gray-4');
            lyrics_having_track_name[k].classList.add('hover:bg-c-gray-3');
          }
    
          // set to 0 state | 500
          // lyrics opacity
          for(let k=0; k<track_lyrics.length; k++){
            track_lyrics[k].classList.remove('opacity-100');
            track_lyrics[k].classList.add('opacity-0');
          }
            
          // config
          setTimeout(() => {
            // set to 0 state | 499
            // sub-lyrics display
            for(let k=0; k<track_lyrics.length; k++){
              for(let l=0; l<track_lyrics[k].children.length; l++){
                track_lyrics[k].children[l].classList.add('hidden');
              }
            }
      
            // set to new state | 499+1
            // corresponding sub-lyrics display
            setTimeout(() => {
              for(k=0; k<track_lyrics[j].children.length; k++){
                track_lyrics[j].children[k].classList.remove('hidden');
              }
            }, 1);
          }, 499);
            
          // set to new state
          // lyrics opacity
          setTimeout(() => {
            track_lyrics[j].classList.remove('opacity-0');
            track_lyrics[j].classList.add('opacity-100');
          }, 500);
    
          // set to new state
          // btn bg-color
          lyrics_having_track_name[j].classList.remove('hover:bg-c-gray-3');
          lyrics_having_track_name[j].classList.add('bg-c-gray-4');
        }
      });
    }
  }

  //********** 0 to dflt state
  // track-name
  // lyrics
  for(let i=0; i<lyrics_having_album.length; i++){
    let track_list_parent= lyrics_having_album[i].children[1].children[1].children[1].children[0].children[0].children[1];
    let lyrics_having_track_name= track_list_parent.getElementsByTagName('button');

    // simulate a click
    lyrics_having_track_name[0].click();
  }

  let section= document.getElementsByTagName('section');
  let btn= document.getElementsByClassName('menu-btn');
  for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', ()=>{
      // set to 0 state
      // section opacity
      // sub-section display
      for(let j=0; j<section.length; j++){
        section[j].classList.remove('opacity-100');
        section[j].classList.add('opacity-0');
        for(let k=0; k<section[j].children.length; k++){
          section[j].children[k].classList.add('hidden');
        }
      }

      // set to new state
      // section opacity
      // sub-section display
      section[i].classList.remove('opacity-0');
      section[i].classList.add('opacity-100');
      for(let j=0; j<section[i].children.length; j++){
        section[i].children[j].classList.remove('hidden');
      }
    });
  }