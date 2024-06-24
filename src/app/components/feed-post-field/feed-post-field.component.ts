import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-feed-post-field',
  standalone: true,
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TextFieldModule,
    MatTooltipModule,
    MatCardModule
  ],
  templateUrl: './feed-post-field.component.html',
  styleUrl: './feed-post-field.component.scss'
})
export class FeedPostFieldComponent {
  public postQuestions: string[] = [
    "Compartilhe seu brilho! O que você andou conquistando por aqui?",
    "Momento 'Me conte tudo'! O que está rolando no seu dia a dia?",
    "Alguma novidade para compartilhar? Diga aí o que está bombando!",
    "Compartilhe sua história! O que te inspirou hoje? ✨",
    "Deixe a criatividade fluir! O que você quer contar para a galera?",
    "Alguma fofoca do escritório para soltar? ",
    "Confesse: qual foi a sua última gafe no trabalho? ",
    "Mostre seu meme favorito do momento! ",
    "Compartilhe um GIF que resume seu dia a dia. ",
    "Qual emoji define seu humor hoje? ",
    "Marque um colega que você admira e diga o porquê. ",
    "Compartilhe uma dica legal para o pessoal do escritório. ",
    "Qual foi o seu café da manhã de hoje? Mostre pra galera! ☕",
    "O que você está ouvindo no momento? ",
    "Qual o seu livro favorito do momento? ",
    "Qual filme você assistiu recentemente e recomenda? ",
    "Qual série você está maratonando? ",
    "Qual o seu hobby favorito? ",
    "Qual lugar você gostaria de viajar? ✈️",
    "Qual a sua comida favorita? ",
    "Qual o seu animal de estimação favorito? ",
    "Qual o seu super-herói favorito? ‍♀️‍♂️",
    "Se você pudesse ter qualquer poder, qual seria? 🪄",
    "Qual a sua frase favorita? ",
    "O que você faz para relaxar? ",
    "Qual o seu maior sonho? ",
    "Qual o seu lema de vida? ",
    "O que você é grato hoje? ",
    "Compartilhe uma mensagem positiva para a galera! ",
    "O que você está aprendendo no momento? ",
    "Qual o seu projeto favorito no trabalho? ",
    "Qual desafio você está superando? ",
    "Qual a sua conquista mais recente? ",
    "O que você espera alcançar no próximo mês? ",
    "Dê um conselho para quem está começando no escritório. ",
    "Compartilhe uma foto ou vídeo legal do seu dia a dia. ",
    "Crie uma enquete para a galera participar. ",
    "Faça uma live para bater um papo com o pessoal. ️",
    "Responda a um comentário de um colega. ",
    "Reaja a uma postagem com um emoji. ",
    "Compartilhe um link interessante para a galera. ",
    "Marque o @ de um colega em sua postagem.**",
    "Use hashtags para aumentar o alcance da sua postagem. #SomosUmTime #DiversaoNoTrabalho #SegundaSemTedio #SextaFeiraChegou",
  ];

  public postQuestion = this.postQuestions[Math.floor(Math.random() * 14)];

}
