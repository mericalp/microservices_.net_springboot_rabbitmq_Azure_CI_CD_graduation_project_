from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(0.1, 0.5)  # Daha sık istek göndermek için bekletme süresini azaltın
    host = "http://nginx.bluebay-1372140f.australiaeast.azurecontainerapps.io"  # Nginx URL'nizi buraya girin

    @task
    def load_test(self):
        self.client.get("/")

