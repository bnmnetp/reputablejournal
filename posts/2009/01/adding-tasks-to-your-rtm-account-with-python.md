<!--
.. title: Adding Tasks to your RTM account with Python
.. date: 2009/01/08
.. slug: adding-tasks-to-your-rtm-account-with-python
.. tags: 
.. link: 
.. description: 
-->


The documentation included with the Python RTM API is a bit sparse, so here is a really simple example of a script that allows you to add tasks to your Remember the Milk inbox from the command line. I actually integrated this script with LaunchBar for an even nicer experience.<br /><br /><pre>#!/usr/bin/env python<br />from rtm import *<br />import sys<br />apiKey = "get your own"<br />secret = "this too"<br />token = "you'll create this with apiKey and secret"<br /><br />newTask = " ".join(sys.argv[1:])<br />rtm = createRTM(apiKey, secret, token)<br />tl = rtm.timelines.create()<br />rsp = rtm.tasks.add(timeline=tl.timeline,name=newTask,parse=1)<br /></pre><br /><br />There now that is really very easy.<br /><br />To Add this to LaunchBar create a new search template. Name it something simple like TD and add this to the details section: <br /><br />x-launchbar:execute?path=/Your/path/here/addinbox.py&arguments="*"<br /><br />Cool! Now I can bring up LaunchBar, type TD to bring up my search template.  Hit the spacebar to get a text entry box and then type in my todo item. Hit return and the above script is run to instantly add your new task to your inbox.   You'll notice that the call to rtm.tasks.add has a parameter parse=1 This parameter tells RTM to parse due date information out of the string you give it.<br /><br />Of course you could build on the above script to create your own little syntax to specify the list you wanted to add the task to, or for adding tags etc.  But this is really simple to get started.<div class="blogger-post-footer"><img width='1' height='1' src='https://blogger.googleusercontent.com/tracker/2759017781463016019-4846940317834581701?l=blog.bonelakesoftware.com' alt='' /></div>
