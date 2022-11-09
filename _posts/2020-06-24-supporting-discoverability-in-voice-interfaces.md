---
seo_description: Discoverability is the ability for users to find and execute features through a user interface, and is also often considered an aspect of learnability…
redirect_from:
  - /r/cui2020
---

# Supporting discoverability in voice interfaces

*Discoverability* is the ability for users to find and execute features through a user interface[^1], and is also often considered an aspect of *learnability*[^2]. It's also a common problem many of us encounter with *screen-less* devices, such as smart speakers. Often users will not know what a screen-less device can do without going through some trial and error, looking up information online, or receiving help from another person. In the world of graphical user interfaces, elements like menus, buttons, links, dialogs, etc., are designed to help users discover what a system can do quickly. Voice interfaces, on the other hand, are largely *invisible* interfaces, except for, say, a status indicator, and thus we cannot rely upon these methods to help users.

<!--more-->

While discoverability is almost certainly a part of learnability, issues stemming from poor discoverability don't just apply to new users. Smart speakers—like many new consumer technologies—now receive frequent updates from manufacturers that add features previously not available. Research in HCI has shown that [users settle on a set of commands with smart speakers](http://web.mit.edu/bentley/www/papers/ghome-imwut-final.pdf "Read 'Understanding the Long-Term Use of Smart Speaker Assistants' by Bentley et al.") and don't try new features, thus manufacturers have to find methods to foreground these new features to users [^3]. Recently updated apps on mobile phones and desktops will launch with a splash screen to announce new features in the latest update, but with smart speakers, manufacturers are reduced to sending out emails to users to try and encourage experimentation. I'm sure we can all agree email sucks.

While the above description could be considered a macro-view on discoverability, there is also a more nuanced one: how to find out what to say next in an already existing sequence of interaction. We know this is a problem (see [my previous blog post](https://www.porcheron.uk/blog/getting-it-done-with-a-voice-interface "Read my blog post 'Getting it done with a voice interface'")). Even in a simple dialogue with a system, finding the words to say next is challenging if you do not know what words the system accepts. 

In a paper be presented at (Virtual) [CUI 2020](https://cui2020.com/ "Conversational User Interfaces conference 2020"), we explore a subset of this issue, in particular focusing in on how users can discover what to say in an interaction sequence with a voice interface. Broader challenges, such as how to foreground new features unobtrusively remain unresolved, for now. <!-- You can watch my presentation below, or read the longer summary below.-->

<!-- {% include figure_video.html video='<iframe src="https://www.youtube-nocookie.com/embed/ysJcb1FEPdc?feature=oembed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" width="480" height="370" frameborder="0"></iframe>' caption='Watch my presentation of the work at <a href="https://cui2020.com/" title="ACM SIGCHI In-Cooperation Conversational User Interfaces 2020 confernece">CUI 2020</a>' %} -->

## Two methods for discoverability

There are two approaches in literature for helping users to discover what options they can say next through a voice interface: *telling them* or *letting them ask*. The former is also referred to as [explicit prompts](https://doi.org/10.1145/242485.242500 "Read 'How do users know what to say?' by Nicole Yankelovich")[^4], and the latter has been used in studies using the moniker ["What Can I Say?"](https://dl.acm.org/doi/10.1145/274644.274722 "Read 'What can I say?: evaluating a spoken language interface to Email' by Walker et al.")[^5]. We decided to compare the effect of these strategies on user performance and users' subjective assessment of usability. We conducted an experiment in which users had to use a voice user interface to order takeaway food three times. One time they received information on available options every time (we called this the *automatic* condition), a second time they had to ask for the available options (we called this the *requested* condition), and in the third, no help information was available (the *baseline* condition).

Our experiment had a set of consistent 'stages' participants would have to pass through each time (e.g., choose a cuisine, restaurant, dish, and so forth)—they also had to choose a different cuisine each time. In total, we measured their time to complete a task, the number of errors they made (i.e., something the voice interface did not recognise as a valid response), the number of turns they took, and the number of successfully completed stages (if a participant made two subsequent errors in a stage, we moved them on to avoid a dead end). We also administered the [System Usability Scale](https://books.google.co.uk/books?hl=en&lr=&id=IfUsRmzAqvEC&oi=fnd&pg=PA189&dq=SUS:+A+Quick+and+Dirty+Usability+Scale&ots=GaqAD7mq2n&sig=gMy_4yowu1THvQXqHaNm07n6hZ8#v=onepage&q=SUS%3A%20A%20Quick%20and%20Dirty%20Usability%20Scale&f=false "Read about the System Usability Scale by John Brooke on Google Books") questionnaire[^6] for each condition. Finally, we asked some questions about their experience in a brief feedback session.

## Task metrics and usability scores

We were unsure how each metric would necessarily fare across conditions. There was no "winning strategy" across our four task metrics:

* Despite the longer prompt times for each stage, the completion time per task was significantly shorter with the automatic condition compared to the baseline (it was also insignificantly shorter for the requested condition)
* Perhaps unsurprisingly, the number of errors was significantly smaller for both conditions with a discoverability strategy, although there was no significant difference between the two strategies
* The automatic condition had significantly fewer turns than both the requested and baseline conditions, and although the requested condition had fewer turns on average, this was not significant
* The number of successfully completed stages was significantly higher for the automatic and requested conditions compared to the baseline condition (but not between the two strategies)

The usability score for both discoverability strategies was greater than the baseline condition (but again, there was no significant difference between the strategies). When we asked people about their reflections on the conditions, the requested strategy came out on top if they used the voice interface more frequently.

## Order effects

Although we counterbalanced the conditions participants faced, each task followed a consistent set of stages through the task. As such, we were curious is participants still learned more about the structure of the interaction and thus performed better in subsequent conditions.

Our analysis showed that participants performed worst in the first condition they faced, regardless of which condition it was, with higher means for time per task and number of errors per task. By the final condition of the experiment, both the mean completion time and number of errors had reduced. We note the caveat that these observations are merely indicative as they are based on descriptive statistics, but this does suggest that participants’ seemingly improved their use of the interface throughout the study.

---

## Implications for design

Participants in both conditions with a discoverability strategy made significantly fewer errors, completed significantly more stages of the ordering process, and perceived the usability as significantly better than in the baseline condition. These results suggest that the implementation of either discoverability strategy is preferable to not providing any discoverability support.  Participants in the automatic condition also took significantly less time and fewer turns per task than in the baseline condition. Turns per task was the only metric for which we found a statistically significant difference between the two strategies. Arguably, the ‘What Can I Say?’ strategy provides for greater interactivity, and by extension potentially for greater engagement—at least when measured in turns taken.

However, it appears that simply comparing the two strategies based on our results to answer the question which strategy is more suitable would miss issues arising from longer term use. While our study was specifically about initial use, and not set up to investigate longer-term use, it is still worthwhile discussing the issue here. The need for explicit discoverability support diminishes with the greater use. Our exploration of potential order effects showed performance increases over time, although only indicative as based on descriptive statistics, and suggests that learning is taking place early during initial use. It strikes us  that the need for discoverability support changes—potentially quite drastically—from first-time use to subsequent use thereafter.

Therefore, we feel voice interface designers should consider adapting the discoverability support they provide to the experience level of the user. Although just how this should be done ultimately calls for more research. It could be done on various metrics, ranging from system data about the user (e.g., if a newly bought smart speaker or installed Skill) to more dynamic features such as utterances made by a previously unrecognised voice or the numbers of errors over a period of time. Moreover, sporadically informing the user of available options could be used to address issues of users not exploring (new or different) voice interface features over time.

We cover these points and provide more analysis from our study in the paper linked below.

{% include associated_pubs.html pubs='What Can I Say? Effects of Discoverability in VUIs on Task Performance and User Experience' %}

----

[^1]: Nicole Yankelovich, Gina-Anne Levow, and Matt Marx. 1995. Designing SpeechActs: issues in speech user interfaces. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (CHI ’95). ACM Press/Addison-Wesley Publishing Co., USA, 369–376. [https://doi.org/10.1145/223904.223952](https://doi.org/10.1145/223904.223952)
[^2]: Eric Corbett and Astrid Weber. 2016. What can I say? addressing user experience challenges of a mobile voice user interface for accessibility. In *Proceedings of the 18th International Conference on Human-Computer Interaction with Mobile Devices and Services* (MobileHCI ’16). Association for Computing Machinery, New York, NY, USA, 72–82. [https://doi.org/10.1145/2935334.2935386]( https://doi.org/10.1145/2935334.2935386)

[^3]:Frank Bentley, Chris Luvogt, Max Silverman, Rushani Wirasinghe, Brooke White, and Danielle Lottridge. 2018. Understanding the Long-Term Use of Smart Speaker Assistants. *Proc. ACM Interact. Mob. Wearable Ubiquitous Technol*. 2, 3, Article 91 (September 2018), 24 pages. [https://doi.org/10.1145/3264901](https://doi.org/10.1145/3264901)

[^4]:Nicole Yankelovich. 1996. How do users know what to say? *interactions* 3, 6 (Nov./Dec. 1996), 32–43. [https://doi.org/10.1145/242485.242500](https://doi.org/10.1145/242485.242500)

[^5]: Marilyn A. Walker, Jeanne Fromer, Giuseppe Di Fabbrizio, Craig Mestel, and Don Hindle. 1998. What can I say? evaluating a spoken language interface to Email. In *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems* (CHI ’98). ACM Press/Addison-Wesley Publishing Co., USA, 582–589. [https://doi.org/10.1145/274644.274722](https://doi.org/10.1145/274644.274722)

[^6]: John Brooke. 1996. SUS: A ‘quick and dirty’ usability scale. In *Usability Evaluation In Industry* (1 ed.), Patrick W Jordan, Bruce Thomas, Bernard A Weerdmeester, and Ian L McClelland (Eds.). CRC Press, London, UK, Chapter 21, 189–194.

