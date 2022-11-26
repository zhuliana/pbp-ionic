import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { ApiService } from 'src/app/api.service';
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-add-gedung',
  templateUrl: './add-gedung.page.html',
  styleUrls: ['./add-gedung.page.scss'],
})
export class AddGedungPage implements OnInit {
  nama: any;
  prodi: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
) { }

  ngOnInit() {
  }

  addGedung() {
    let url = this._apiService.apiURL() + "/add_gedung.php";
    Http.request({
      method: "POST",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: {
        nama: this.nama,
        prodi: this.prodi
      },
    }).then((data: any) => {
      this.nama = '';
      this.prodi = '';
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Berhasil Input data Gedung',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
      this.router.navigateByUrl('/gedung');
    }, (error: any) => {
      this.alertController.create({
        header: 'Notifikasi',
        message: 'Gagal Input data Gedung',
        buttons: ['OK'],
      }).then(res => {
        res.present();
      });
    })
  }

}
