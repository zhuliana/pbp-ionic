import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-gedung',
  templateUrl: './gedung.page.html',
  styleUrls: ['./gedung.page.scss'],
})
export class GedungPage {
  id: any;
  nama: any;
  prodi: any;
  gedungs: any[] = [];
  
  constructor( public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Router) { 
      this.getGedung();
    }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }
  
  ionViewDidEnter() {
    console.log("jika selesai loading");
    this.getGedung();
  }

  getGedung() {
    this._apiService.getGedung().subscribe((res: any) => {
      console.log("sukses", res);
      this.gedungs = res;
    }, (error: any) => {
      console.log("gagal", error);
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal memuat data gedung',
        buttons: ['OK']
      }).then(res => {
        res.present();
      })
    })
  }

  deleteGedung(id: any) {

    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.deleteGedung(id).subscribe((res: any) => {
              console.log("sukses", res);
              this.getGedung();
            }, (error: any) => {
              console.log("error", error);
              this.alertController.create({
                header: 'Notifikasi',
                message: 'gagal memuat data mahasiswa',
                buttons: ['OK']
              }).then(res => {
                res.present();
              })
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }
}
