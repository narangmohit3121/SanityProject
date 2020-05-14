FROM node:10.16.1
# Update aptitude with new repo
RUN apt-get update
# Install software 
RUN apt-get install -y git
WORKDIR /home/code/app
# Install "software-properties-common" (for the "add-apt-repository")
RUN apt-get update && apt-get install -y \
    software-properties-common
# Add the "JAVA" ppa
RUN add-apt-repository -y \
    ppa:webupd8team/java
# Install OpenJDK-8
RUN apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant
# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
# backend Packages
RUN npm install -g ts-node
RUN npm install -g typescript
RUN npm install -g pm2
RUN npm install -g nodemon
RUN npm install -g webdriver-manager
RUN npm install -g protractor
# Install Chrome for Selenium
RUN curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o /chrome.deb
RUN dpkg -i /chrome.deb || apt-get install -yf
RUN rm /chrome.deb
# Install chromedriver for Selenium
RUN curl https://chromedriver.storage.googleapis.com/2.31/chromedriver_linux64.zip -o /usr/local/bin/chromedriver
RUN chmod +x /usr/local/bin/chromedriver

#Added by MN
#COPY . /home/code/app
#RUN npm install
#RUN npm run pretest
#RUN npm run cucumberTest