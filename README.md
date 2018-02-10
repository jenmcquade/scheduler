## Objective
- A Docker utility for scheduling tasks through Node using node-schedule

# To run this app 
- Install Docker: https://docs.docker.com/install/
- Clone the project and change directories: 
* `cd scheduler`
* `git clone https://github.com/jonmcquade/scheduler.git`
- Modify App.js to execute the desired task list
- Build your custom Docker image:
* `docker build -t scheduler .`
- Run a Container for your image along with your cron schedule
<br>
* For example, to run the App.js app.exec() method on the 15th minute of the hour, run:
<br>
`docker run --rm -t -e CRON="* 15 * * * *" scheduler`
- Or run a container for your image at a given interval (down to the second)
<br>
* For example, to run the App.js app.exec() method tasks every five minutes, run:
<br>
`docker run --rm -t -e INTERVAL=300 scheduler`