import pygame, sys
from pygame.locals import *

pygame.init()

# set the FPS
FPS = 60;
fpsClock = pygame.time.Clock();

# set the window
DISPLAYSURF = pygame.display.set_mode((1920, 1080))
pygame.display.set_caption('animation')

GREEN = (0, 235, 96)
catImg = pygame.image.load('cat.png')
catx = 10
caty = 10
direction = 'right'

# game loop
while True:
    DISPLAYSURF.fill(GREEN)

    if direction == 'right':
        catx += 2
        if catx == 1720:
            direction = 'down'
    elif direction == 'down':
        caty += 2
        if caty == 860:
            direction = 'left'
    elif direction == 'left':
        catx -= 2
        if catx == 10:
            direction = 'up'
    elif direction == 'up':
        caty -= 2
        if caty == 10:
            direction = 'right'

    DISPLAYSURF.blit(catImg, (catx, caty))

    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()

    pygame.display.update()
    fpsClock.tick(FPS)
