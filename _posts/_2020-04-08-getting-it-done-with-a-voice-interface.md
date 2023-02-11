# Getting it done with a voice interface

I wondered into examining the use and design of voice interfaces a few years ago during my PhD (see [this paper](https://www.porcheron.uk/pubs/voice-interfaces-in-everyday-life "Voice Interfaces in Everyday Life, presented at CHI '18") or the [summary blog post](/blog/examining-amazon-echo-use-in-the-home "My blog post about examining voice interfaces in the home")). The rapid mass marketisation of the technology has led to the quick succession of [research paper](https://dl.acm.org/doi/10.1145/2858036.2858288 "Read 'Like Having a Really Bad PA: The Gulf between User Expectation and Experience of Conversational Agents' on the ACM Digital Library") after [research paper](https://dl.acm.org/doi/abs/10.1145/3342775.3342785 "Read 'Multitasking with Alexa: how using intelligent personal assistants impacts language-based primary task performance' on the ACM Digital Library") and [Medium post](https://medium.com/the-interaction-design-foundation/how-to-design-voice-user-interfaces-9a189a42e5a3 "Read 'How to Design Voice User Interfaces' on the Interactin Design Foundation Medium") after [Medium post](https://uxdesign.cc/design-guidelines-for-voice-user-interfaces-3c3b73982f4c "Design guidelines for voice user interfaces ''"), but there is seemingly no "golden" set of specific usability heuristics for voice interfaces. Rather, there are several re-examinations of similar rules that were crafted for GUIs, so far (but the times, they are a changin'). Voice interfaces are different for a plethora of well-rehearsed reasons but much of this is to do the invisibility and ephemerality of speech. 

<!--more-->

[Joel](http://www.cs.nott.ac.uk/~pszjf1/ "Joel's homepage"), [Stuart](http://www.cs.nott.ac.uk/~pszsr/ "Stuart's homepage"), me, and [Rein](https://www.ntnu.edu/employees/rein.o.sikveland "Rein's online profile on the NTNU website") (who was at Loughborough University at the time and is now at the Norwegian University of Science and Technology) examined the notion of *progressivity* in relation to the use of voice interfaces. In [Conversation Analysis](https://en.wikipedia.org/wiki/Conversation_analysis "Conversation analysis on Wikipedia") terms, progressivity is a feature of conversation in which people work to *keep things moving* in a conversation. A simple example of this is how if someone doesn't respond to a question you ask them, they'll provide an account for not answering, or someone else might self-select to answer (as opposed to everyone remaining silent). It's the conversational equivalent of the mantra 'getting things done'.

*Progressivity* is not a new construct we have invented, nor is it missing from existing literature on voice interfaces, per sé. In fact, it is often the core of design arguments, but rarely articulated or grounded in design or understanding of conversation. Therefore, the point of this work was to examine how interaction with a voice interface unfolds more closely and to propose progressivity as a principled and grounded approach for future voice interface design. This, we feel, stands in contrast to the myriad marketing-led 'personas' and aesthetics used in voice interface design that implicitly encourage progressivity, but fail to adequately articulate it or its importance.

In this blog post, I'll introduce a few flavours of what we found in looking at the use of an Amazon Echo and the Alexa platform in family homes. There is much more data and elaboration in the paper (the PDF is linked at the bottom of the page). *A word of caution*: this is not to  criticise the Alexa agent. We chose Alexa as a commercially-available product out of convenience. The data here is used to provoke design thinking and not serve as a critique of any product.

---

## The canonical case
I want to introduce what we consider the canonical sequence of interaction with a voice interface such as Alexa. In this blog post, I'll be using transcripts of families using an Amazon Echo. These transcripts typically take the following form:

    01 INT question / command
    02 ALE response
    03 INT evaluation

The general flow when using a voice interface is thus: an `INT`eractant asks a question or issues a command (line 1), `ALE`xa responds (line 2), and the `INT`eractant evaluates this response in some way (line 3). This third step is not always visible, though. For example, here Rob asks his Echo to play a radio station:

    01 ROB alexa (0.5) play all fm
    02     (3.3)
    03 ALE all fm (.) on tune in ((radio plays))

In this situation, Rob uses the `Alexa` wake word, pauses for half a second, and then issues a command (line 1). There is a `3.3` second pause (line 2) followed by the response from the device: `all fm` + a short pause + `on tune in` (line 3). In this situation, there is no transcribed third position of `ROB`'s evaluation, likely due to a positive assessment by `ROB` of `ALE`xa's response. This is the ideal situation, but obviously far from reality all of the time.

---

## When the response is not what was wanted
A common scenario is where a voice interface's response is not what the interactant wanted. Consider this situation where Susan issues a command to her Echo:

    01 SUS alexa (0.7) set us a family quiz
    02     (2.5)
    03 ALE sorry (.) i can't find the answer to the question i heard

`ALE`xa issues what is called a *dispreferred* response—the response is not a family quiz but rather an apology for not understanding the question. `EMM`a—who is also present during `SUS`an's initial request—responds to the device's response:

    05 EMM alexa (1.0) set (0.3) a family quiz
    06     (2.3)
    07 ALE sorry (.) i don't have the answer to that question
    
Progress through the sequence is impeded through the repeated production of similar non-answer responses by the device. There is no *purchase* for how an interactant should revise or improve their request to the device in their evaluation of the response.  What happens after this response is examined more in the paper (in short, the family continue trying with variations of the same request—all without success). 

We note that this sort of frustrating situation is not the universal case for how voice interfaces always respond. Consider this second sequence from the same family:

    01 EMM alexa (.) (1.0) play beat the intro
    02     (1.9)
    03 ALE you want to hear a station for b b intro 
           [(0.4) right?]
    05 EMM [ no         ]
    
In this snippet of data, `EMM`a issues the command for the device to play a third-party game, [Beat the Intro](https://www.amazon.co.uk/Musicplode-Media-Ltd-Beat-Intro/dp/B07G4LSLBL "Beat the Intro on the Alexa Skills Store"). `ALE`xa responds clarifying the request (lines 3–4). The response from `ALE`xa ‘proposes’ that Emma wanted to `hear a station` and makes the speech-to-text transcription of Emma’s prior request hearably available to Emma as `b b intro`. `EMM`a responds to this (line 5) before the device completes its own response to the initial request (there is overlapping talk, as shown in the `[square brackets]`). This response from `ALE`xa also serves the purpose of progressing the sequence, drawing to a close with a simple and apt response by Alexa (line 9):

    06     (1.1)
    07 EMM no (.) i don't alexa (0.5) no
    08     (1.3)
    09 ALE alright

Rather than terminate the sequence (as above with the family quiz), here `ALE`xa provides the opportunity to progress the sequence further despite the response not being preferred. Rather than simply leaving the interactant to repeat or rephrase their request, Alexa offers a concrete move in the sequence.

---

## Introducing 'progressive response design'
In the paper we unpack several different elements of progressivity further, but the crux of our argument is the need for a consideration of 'progressive response design'. Responses from voice interfaces are not necessarily the *end* of interaction sequences with the device, especially when a response is dispreferred. There is often an explicit evaluation by at least one interactant as part of a further sequence of actions that unfold and this subsequent sequence hinges upon the response from the device. As we say in the paper:

> [T]he utility of the response from the VUI is a core concern when designing to support users ‘getting things done’; put simply, response design can support or impede the user’s progress.

A response that ends an interaction sequence with an apology but without an account for what 'went wrong' does not support the interactant's progress. Alternatively, as with the 'beat the intro' example', the voice interface repeating its transcribed input allows the interactant to reason about the response and progress their interactive sequence further.

After working through a number of chunks of data, we articulate five different questions for designers to consider in thinking through response design and how to apply this in their design of voice interface experiences. If the above flavour interests you, I'd encourage you to check out the full paper below.

{% include associated_pubs.html pubs='Progressivity for Voice Interface Design' %}