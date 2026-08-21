+++
date = "2026-08-20"
publishDate = "2026-08-20"
description = "An ASCII roguelike where you can see every enemy's next move, every trap's trigger, and your own death. But changing any of it costs the finite Spindle that fuels your only advantage."
keywords = ["devlog", "fimbul", "gamedev", "handmade", "odin", "roguelike", "sdl3"]
summary = "A Norse roguelike built by hand in Odin and SDL3. You play as a Skald-Seer who can see the threads of fate, but manipulating them costs a scarce resource called Spindle. Perfect prediction, expensive interference."
tags = ["devlog", "fimbul", "gamedev", "handmade", "odin", "roguelike", "sdl3"]
title = "I Can See My Death and It Has a Color"
slug = "fimbul-devlog-0"
+++

> You drank from a well at the wrong end of the world. Not the wisdom everyone seeks. The other one, stagnant and forgotten. Now your vision splits. Overlaid on every living thing is a thread: faint, colored, pulling toward an inevitable next moment. The wolf does not hunt you. It simply walks where the thread leads. The trap does not surprise you. You watched its thread vibrate for three turns before you stepped near it.
>
> You are still one person with a tired arm and a dulling blade. Seeing death coming does not mean you have the strength to stop it.

Games usually give you prediction in two ways: a minimap blip, or a UI tooltip that says "Attack: 3 turns". Both are free. Both flatten the world into a spreadsheet.

**Fimbul** flips this by giving you perfect prediction, then charging you to change it. Every thread you _Snip_ to cancel an attack, every thread you _Pull_ to redirect a blade, costs _Spindle_. It is not mana. It does not regenerate. It is a physical thing you find in the dark, like flint or bread. When it is gone, you are playing a pure traditional roguelike in a world that remembers you cheated.

These threads are not hints. They are leverage. And leverage has a price.

Picture this: You enter a room. Two scouts ahead. Threads flicker into view. Scout A's gold line ends on a spike trap three turns from now. Scout B's red line points at your throat. You have three Spindle.

_Snip_ B's attack and you survive this turn. Cheap. Safe. Boring.

_Pull_ B's thread into A and they gut each other. Two Spindle gone. But you keep the third, and the stairs are still six rooms away.

Or you do nothing. Let A walk into the trap for free. B hits you. You take the damage, save all three Spindle for whatever is waiting in the dark.

There is no right answer. There is only what you can afford.

You step into a chamber and the threads shudder. Something here is reading them back.

A Nornir Weaver. You step forward and raise your blade. The Weaver does not flinch. You feel the thread of your own blow go slack before the edge reaches it. Something severed. Your blade passes through empty air. It reads the same lines you do. It can _Snip_ your escape routes before you think to use them. Fighting one is not combat. It is a duel of causality, and you are both holding the same knife. When it bests you, the screen floods with seawater. Your corpse washes up on the shore where your next run begins. Same face. Same name. Different timeline. **No inheritance, no unlocks.** Just the memory of what you tried and where you failed.

There is no surface town. No shopkeeper with infinite inventory. Your entire sanctuary is a beached longship, its sail rotting, its fire fed by whatever _amber_ you manage to scavenge. That fire is your clock. When it dies, Fimbulwinter arrives on the floor where you stand. Your vision shrinks. The enemies begin to frenzy. The threads tangle into unreadable knots.

Your crew is not decoration. The berserker, the navigator, the blacksmith. They give you passive bonuses by being on your longship. As the fire dies out, you have a choice. Do you let Fimbulwinter come? Or do you push one of them into the flames for a surge of Spindle and a boiled-blood berserk state that blinds you to your own threads?

The game does not ask you to feel bad about this. I thought about adding a guilt meter once and realized it would ruin everything. Now there's just the choice, and the fire, and whatever you decide to live with.

The gods do not answer prayers. They are silent patrons at best. Raging weather at worst.

I am building Fimbul by hand in Odin and SDL3, without a general-purpose game engine. Not because it is faster. It definitely is not. I chose to build it this way because I want to understand every surface the player touches. The game renders at 384 by 288 pixels, blown up for modern screens with sharp, unfiltered pixels. The thread overlay is drawn pixel by pixel, under the glyphs, because that separation matters visually. Human shape above. Fate below.

The game logic lives in a separate layer that can be rewritten while the world keeps running. I change a rule, rebuild, and the current run keeps breathing. I can iterate on feel twenty times before the day is done without starting my run over.

Next: the first threads. A line tracing from a scout to its next victim, drawn under the glyphs because fate should feel buried. After that, an enemy that can see your threads and cut them first.

There is no release date, no Kickstarter. There is just the work, the longship's fire, and the question of whether I can make causality feel as heavy as it should.
