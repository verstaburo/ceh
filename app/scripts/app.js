import $ from 'jquery';
import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import mainSlider from '../components/slider/slider';
import header from '../components/header/header';


$(() => {
  // your code goes here
  objectFitImages('.image-bg__img');
  mainSlider();
  svg4everybody();
  header();
});
