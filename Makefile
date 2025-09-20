
all: build

build: ./app.ts
	ags bundle app.ts myshell

run: ./app.ts
	ags run .