# Frontend Deployment and Service
resource "kubernetes_deployment" "frontend" {
  metadata {
    name = "frontend"
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app = "frontend"
        }
      }

      spec {
        container {
          name  = "frontend"
          image = "merica/ui_animal_app:aks"

          port {
            container_port = 3000
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "frontend" {
  metadata {
    name = "frontend"
  }

  spec {
    selector = {
      app = "frontend"
    }

    port {
      port        = 3000
      target_port = 3000
    }

    type = "ClusterIP"
  }
}

# Nginx Deployment and Load Balancer Service
resource "kubernetes_deployment" "nginx" {
  metadata {
    name = "nginx"
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "nginx"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx"
        }
      }

      spec {
        container {
          name  = "nginx"
          image = "merica/nginx_image:aks"

          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "nginx" {
  metadata {
    name = "nginx"
  }

  spec {
    selector = {
      app = "nginx"
    }

    port {
      port        = 80
      target_port = 80
    }

    type                = "LoadBalancer"
    external_traffic_policy = "Local"
  }
}

# Product Service Deployment and Service
resource "kubernetes_deployment" "product_service" {
  metadata {
    name = "product-service"
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "product-service"
      }
    }

    template {
      metadata {
        labels = {
          app = "product-service"
        }
      }

      spec {
        container {
          name  = "product-service"
          image = "merica/animal_service:lts"

          port{
            container_port = 7001
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "product_service" {
  metadata {
    name = "product-service"
  }

  spec {
    selector = {
      app = "product-service"
    }

    port {
      port        = 7001
      target_port = 7001
    }

    type = "ClusterIP"
  }
}

# RabbitMQ Deployment and Service
resource "kubernetes_deployment" "rabbitmq" {
  metadata {
    name = "rabbitmq"
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        app = "rabbitmq"
      }
    }

    template {
      metadata {
        labels = {
          app = "rabbitmq"
        }
      }

      spec {
        container {
          name  = "rabbitmq"
          image = "rabbitmq:3-management"

          port {
            container_port = 5672
            name           = "amqp"
          }
          port {
            container_port = 15672
            name           = "management"
          }

          env {
            name  = "RABBITMQ_ERLANG_COOKIE"
            value = "SWQOKODSQALRPCLNMEQG"
          }
          env {
            name  = "RABBITMQ_DEFAULT_USER"
            value = "guest"
          }
          env {
            name  = "RABBITMQ_DEFAULT_PASS"
            value = "guest"
          }
          
        }
      }
    }
  }
}


resource "kubernetes_service" "rabbitmq" {
  metadata {
    name = "rabbitmq"
  }

  spec {
    selector = {
      app = "rabbitmq"
    }

    port {
      name           = "amqp"
      port           = 5672
      target_port    = "amqp"
    }
    port {
      name           = "management"
      port           = 15672
      target_port    = "management"
    }

    type = "ClusterIP"
  }
}

# Search Service Deployment and Service
resource "kubernetes_deployment" "search_service" {
  metadata {
    name = "search-service"
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = "search-service"
      }
    }

    template {
      metadata {
        labels = {
          app = "search-service"
        }
      }

      spec {
        container {
          name  = "search-service"
          image = "merica/search_service:lts"

          port {
            container_port = 8080
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "search_service" {
  metadata {
    name = "search-service"
  }

  spec {
    selector = {
      app = "search-service"
    }

    port {
      port        = 8080
      target_port = 8080
    }

    type = "ClusterIP"
  }
}
