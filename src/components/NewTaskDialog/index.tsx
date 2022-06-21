import { Button } from '../Button';
import { ButtonArea } from '../ButtonArea';
import NewTaskDialogDesign from './style';

interface NewTaskDialogProps {
    handleCloseButton: () => void;
    handleConfirmButton: () => void;
}

export function NewTaskDialog({ handleConfirmButton, handleCloseButton }: NewTaskDialogProps) {
    return (
        <NewTaskDialogDesign>
            <div className="block-area"></div>
            <div className="dialog-area">
                <h3>Nova Tarefa</h3>
                <div className="dialog-fieldarea">
                    <div className="dialog-field">
                        <label htmlFor="task-title">Título</label>
                        <input id="task-title" type="text" />
                    </div>

                    <div className="dialog-field">
                        <label htmlFor="task-description">Descrição</label>
                        <textarea id="task-description"></textarea>
                    </div>
                </div>
                <ButtonArea>
                    <Button text="Confirmar" onClick={handleConfirmButton} primary />
                    <Button text="Fechar" onClick={handleCloseButton} />
                </ButtonArea>
            </div>
        </NewTaskDialogDesign>
    );
}
