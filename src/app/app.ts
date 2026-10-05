import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { MovieCard } from './components/movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Cinebook Movie Booking System');
}
