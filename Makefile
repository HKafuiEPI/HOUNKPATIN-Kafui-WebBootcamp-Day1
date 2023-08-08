##
## EPITECH PROJECT, 2023
## Makefile
## File description:
## Makefile
##

SRC	=	hello.c	\

OBJ	=	$(SRC:.c=.o)

NAME	=	hello

all:	$(NAME)

$(NAME):	
	gcc -o $(NAME) $(SRC) 

clean:
	rm -f $(OBJ)

fclean: clean
	rm -f $(NAME)

re:	fclean all
