<template>
    <div class="">
      <h1>Single select</h1>
      <form>
        <input type="reset" class="reset" value="Clear it!" />
        <div class="__select" data-state="">
          <div class="__select__title" data-default="Option 0">Option 0</div>
          <div class="__select__content">
            <input id="singleSelect0" class="__select__input" type="radio" name="singleSelect" checked />
            <label for="singleSelect0" class="__select__label">Option 0</label>
            <input id="singleSelect1" class="__select__input" type="radio" name="singleSelect" />
            <label for="singleSelect1" class="__select__label">Option 1</label>
            <input id="singleSelect2" class="__select__input" type="radio" name="singleSelect" disabled />
            <label for="singleSelect2" class="__select__label">Option 2 (disabled)</label>
            <input id="singleSelect3" class="__select__input" type="radio" name="singleSelect" />
            <label for="singleSelect3" class="__select__label">Option 3</label>
            <input id="singleSelect4" class="__select__input" type="radio" name="singleSelect" />
            <label for="singleSelect4" class="__select__label">Option 4</label>
          </div>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  data:() => ({
    test: 'test'
  }),
  mounted() {
    const selectSingle = document.querySelector('.__select');
    const selectSingle_title = selectSingle.querySelector('.__select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
});
  }
  
}
</script>

<style lang="sass" scoped>
* 
  box-sizing: border-box

h1 
  display: flex
  justify-content: center


.__select 
  position: relative
  width: 37.8rem
  height: 4.4rem
  margin: 0 auto

  &[data-state="active"] 
    .__select__title 
      &::before 
        transform: translate(-3px, -50%) rotate(-45deg)
      

      &::after 
        transform: translate(3px, -50%) rotate(45deg)
      
    
    
    .__select__content 
      opacity: 1
    
    
    .__select__label + .__select__input + .__select__label 
      max-height: 40px
      border-top-width: 1px
    
  

.__select__title 
  display: flex
  align-items: center
  min-width: 100%
  height: 100%
  padding: 0.8rem 1.6rem
  border-radius: 2.5rem
  border: solid 1px #ffffff
  cursor: pointer
  background-color: #ffffff

  &::before,
  &::after 
    content: ""
    position: absolute
    top: 50%
    right: 2rem
    display: block
    width: 0.6rem
    height: 0.1rem
    transition: all 0.3s ease-out
    background-color: #333333
    transform: translate(-3px, -50%) rotate(45deg)
  &::after 
    transform: translate(3px, -50%) rotate(-45deg)

  &:hover 
    // border-color: #D8093A
    &::before,
    &::after 
    //  background-color: #D8093A
    
  

.reset 
  display: flex
  width: 230px
  padding: 8px 16px
  margin: 0 auto
  margin-bottom: 10px
  
  border: solid 1px #c7ccd1
  border-radius: 5px
  
  transition: all 0.2s ease-out
  
  cursor: pointer
  
  font-weight: bold
  
  background-color: #ffffff
  color: #333333
  
  &:hover 
    background-color: grey
    color: #ffffff
  

.__select__content 
  position: absolute
  top: 40px
  left: 3px
  display: flex
  flex-direction: column
  width: calc(100% - 6px)
  background-color: #ffffff
  border: 1px solid #c7ccd1
  border-top: none
  border-bottom-left-radius: 5px
  border-bottom-right-radius: 5px
  transition: all 0.3s ease-out
  opacity: 0
  z-index: 8

.__select__input 
  display: none

  &:checked + label 
    background-color: #dedede
  
  &:disabled + label 
    opacity: 0.6
    pointer-events: none
  

.__select__label 
  display: flex
  align-items: center
  width: 100%
  height: 40px
  max-height: 0
  padding: 0 16px
  
  transition: all 0.2s ease-out

  cursor: pointer
  
  overflow: hidden

  & + input + & 
    border-top: 0 solid #C7CCD160
  

  &:hover 
    background-color: #D8093A !important

    color: #ffffff
  

</style>