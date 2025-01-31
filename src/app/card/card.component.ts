import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { link } from 'node:fs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image: string = '';
  @Input() link: string = '';
  @Input() title: string = '';
  
  cards = [
    { 
      title: 'HPRC', 
      link: 'https://hprc-ui.its.hpecorp.net/jetspeed/portal/_ns:YWhwcmMtMF9faHByYy0xX19ocHJjLTJ8YzB8ZDF8ZW1vdGQ9MT08ZGl2Pjxmb250IHN0eWxlXFw9ImNvbG9yOmdyZWVuIj5QbGVhc2UgTk9URTogSFBSQyBpcyBhIGZpbGUgPGI.PGk.dHJhbnNmZXI8L2k.PC9iPiBzZXJ2aWNlLCBub3QgYSBmaWxlIHN0b3JhZ2UgcmVwb3NpdG9yeS4gSWYgeW91ciBkcm9wIGJveCBjb250ZW50IGlzIGltcG9ydGFudCwgc2F2ZSBhIGNvcHkgZWxzZXdoZXJlLjwvZm9udD48YnIvPjxici8.PGRpdj48Zm9udCBzdHlsZVxcPSJjb2xvcjojNzc3Nzc3Ij48Yj5Vc2VmdWwgSFBSQyBvbmxpbmUgaGVscDo8L2I.PC9mb250Pjx1bD48bGk.PGEgdGFyZ2V0XFw9Il9uZXciIGhyZWZcXD0iaHR0cDovL2hwZWRpYS5vc3AuaHBlLmNvbS93aWtpL0hQUkNfKENvbG8pLV9Vc2luZ19UaGVfSFBSQ19VSSI.Q3JlYXRpbmcgYW5kIE1hbmFnaW5nIFlvdXIgRlRQIERyb3AgQm94IGFuZCBBY2Nlc3MgQWNjb3VudHM8L2E.PC9saT48bGk.PGEgdGFyZ2V0XFw9Il9uZXciIGhyZWZcXD0iaHR0cDovL2hwZWRpYS5vc3AuaHBlLmNvbS93aWtpL0hQUkNfKENvbG8pLV9GQVEiPkFuc3dlcnMgdG8gQ29tbW9uIFF1ZXN0aW9ucyBhbmQgSFBSQyBVc2UgUG9saWNpZXM8L2E.PC9saT48bGk.PGEgdGFyZ2V0XFw9Il9uZXciIGhyZWZcXD0iaHR0cDovL2hwZWRpYS5vc3AuaHBlLmNvbS93aWtpL0hQUkNfKENvbG8pLV9Ib3dfdG9fUmVnaXN0ZXJfZm9yX0hQUkNfRXZlbnRfTm90aWZpY2F0aW9ucyI.UmVnaXN0ZXIgZm9yIEhQUkMgRG93bnRpbWUgTm90aWZpY2F0aW9uczwvYT48L2xpPjwvdWw.PC9kaXY.PHAgc3R5bGVcXD0iY29sb3I6Izc3Nzc3NyI.PGI.UGxlYXNlIGFjY2VzcyB5b3VyIEhQUkMgZHJvcCBib3ggd2l0aCBhIHZpcnR1YWwgaG9zdG5hbWUgKGUuZy4gaHByYy1oMi5pdC5ocGUuY29tKSByYXRoZXIgdGhhbiBhbiBJUC4gIFRob3NlIHJlcXVpcmluZyBJUCBhZGRyZXNzZXMgZm9yIGNvbmZpZ3VyaW5nIGZpcmV3YWxscywgY2FuIGZpbmQgdGhlbSA8YSB0YXJnZXRcXD0iX25ldyIgaHJlZlxcPWh0dHBzOi8vaHBlZGlhLm9zcC5ocGUuY29tL3dpa2kvSFBSQ18oQ29sbykjR2V0dGluZ19TdGFydGVkX3dpdGhfSFBSQz5oZXJlPC9hPi48L2I.PC9wPjwvZGl2PnxlYWN0aW9uPTE9aG9tZVBhZ2U_/hprc', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null
    },
    { 
      title: 'Support Service Central', 
      link: 'https://ssc-ext.wip.it.hpe.com/portal/site/ssc/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Entitlement Service', 
      link: 'https://entitlement-prd-ui-int.its.hpecorp.net/webclient/WebClient/Main.do', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'CReST', 
      link: ' https://cams-crest.wip.it.hpe.com/crestwebsite/index.aspx', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'CSN', 
      link: 'https://vwebcsnepro-dmz-glb.wip.it.hpe.com/hpcsn/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'ELF', 
      link: ' https://vwebcsnepro-dmz-glb.wip.it.hpe.com/hpcsn/', 
      image: 'https://via.placeholder.com/150' ,
      isRunning: false,
      status: null
    },
    { 
      title: 'Webmarms', 
      link: ' https://globalwebmarms-glb.wip.its.hpecorp.net/Global_WebMarms/Website/Login.asp', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Sudden impact', 
      link: '  https://si.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150' ,
      isRunning: false,
      status: null
    },
    { 
      title: 'Sudden impact', 
      link: ' https://p1wg503550.dc01.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150' ,
      isRunning: false,
      status: null
    },
    { 
      title: 'Sudden impact', 
      link: ' https://p1wg503544.dc01.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Sudden impact', 
      link: ' https://p1wg503543.dc01.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Sudden impact', 
      link: ' https://p1wg503552.dc01.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Sudden impact', 
      link: ' https://p1wg503549.dc01.its.hpecorp.net/si/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'eSAM S360', 
      link: ' https://s360.hpe.com/etoolss360/', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },
    { 
      title: 'Carepack Management', 
      link: ' https://cams-crest.wip.it.hpe.com/WWPak.online/GetRPLStatus.aspx', 
      image: 'https://via.placeholder.com/150' ,
      isRunning: false,
      status: null
    },
    { 
      title: 'UCS', 
      link: ' https://hpups.its.hpecorp.net/icap-audit-webapp/Welcome.do%22', 
      image: 'https://via.placeholder.com/150',
      isRunning: false,
      status: null 
    },

  ];

  // isRunning: boolean = false;
  // status: boolean | null = null;

  constructor(private http: HttpClient) {}

  copyToClipboard(link: string | undefined): void {
    if (link) {
      navigator.clipboard.writeText(link).then(
        () => {
          alert('Link copied to clipboard!');
        },
        (err) => {
          console.error('Could not copy text: ', err);
        }
      );
    } else {
      alert('No link available to copy.');
    }
  }

  toggleHealthCheck(card: any) {
    card.isRunning = !card.isRunning;

    const apiUrl = card.isRunning ? '/api/start' : '/api/stop';

    this.http.post(apiUrl, {}).subscribe(
      (response) => {
        // Simulate API response with success for demonstration
        card.status = true; // Set status to success
      },
      (error) => {
        // Simulate API response with failure for demonstration
        card.status = false; // Set status to failure
      }
    );
  }
  
  
}
