import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { attachClickListeners } from './frontend.js';

$(document).ready(function() {
  attachClickListeners();
});
