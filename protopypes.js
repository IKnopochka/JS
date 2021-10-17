Car.prototype.moveRight = function () {
			
			this.speed = Math.floor(Math.random() * 15);

			this.x += this.speed;

			this.carElement.css({
				left: this.x,
				top: this.y
			})
		}

		Car.prototype.moveLeft = function () {
			this.x -= this.speed;

			this.carElement.css({
				left: this.x,
				top: this.y
			})
		}

		Car.prototype.moveUp = function () {
			this.y -= this.speed;

			this.carElement.css({
				left: this.x,
				top: this.y
			})
		}