import {Injectable} from '@angular/core';
import {provider} from '../Model/model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProviderListService {
  private elements: provider[] = [{
    name: 'Bsnl',
    lowest_price: 450,
    rating: 4,
    max_speed: 1.2,
    description: 'Bsnl',
    contact_number: 988727892,
    email: 'Bsnl@s.com',
    image: 'Bsnl', image_url: 'Bsnl.jpg'
  },
    {
      name: 'airtel',
      lowest_price: 550,
      rating: 3,
      max_speed: 1.2,
      description: 'Airtel: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'airtel@s.com',
      image: 'airtel', image_url: 'aitel.jpg'
    },
    {
      name: 'Hathway',
      lowest_price: 250,
      rating: 4,
      max_speed: 1.2,
      description: 'Hathway: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'Hathway@s.com',
      image: 'Hathway', image_url: 'Hathway.jpg'
    },
    {
      name: 'Railtel',
      lowest_price: 350,
      rating: 1,
      max_speed: 1.2,
      description: 'Railtel Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'Railtel@s.com',
      image: 'Railtel', image_url: 'Railtel.jpg'
    },
    {
      name: 'BBNL/BNET',
      lowest_price: 650,
      rating: 3,
      max_speed: 1.2,
      description: 'BBNL/BNET Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'BBNL/BNET@s.com',
      image: 'BBNL/BNET', image_url: 'BBNL/BNET.jpg'
    },
    {
      name: 'ACT Broadband',
      lowest_price: 750,
      rating: 7,
      max_speed: 1.2,
      description: 'ACT Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'ACT@s.com',
      image: 'ACT', image_url: 'ACT.jpg'
    },
    {
      name: 'YOU Broadband',
      lowest_price: 850,
      rating: 2,
      max_speed: 1.2,
      description: 'YOU Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'YOU@s.com',
      image: 'YOU', image_url: 'YOU.jpg'
    },
    {
      name: 'Tikona Digital Network',
      lowest_price: 950,
      rating: 4,
      max_speed: 1.2,
      description: 'Tikona Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'Tikona@s.com',
      image: 'Tikona', image_url: 'Tikona.jpg'
    },
    {
      name: 'Reliance DSL',
      lowest_price: 450,
      rating: 2,
      max_speed: 1.2,
      description: 'Reliance Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      contact_number: 988727892,
      email: 'Reliance@s.com',
      image: 'Reliance', image_url: 'Reliance.jpg'
    },
  ];

  constructor(private http: HttpClient) {
  }

  public getProviders(): Observable<provider[]> {
    return this.http.get<provider[]>('https://bizcredit.herokuapp.com/isps');
  }

  public getdata(): provider[] {
    return this.elements;

  }

  public fetchdetails(name: string): provider {
    for (const prop in this.elements) {
      if (this.elements[prop].name === name) {
        return this.elements[prop];
      }
    }
  }
}

